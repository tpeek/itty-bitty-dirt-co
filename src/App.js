import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';


import logo from './logo.png';
import dirtMound from './dirt_mound.jpeg';
import * as React from 'react';
import Article1 from './Article1';
import './App.css';

const navItems = ['Home', 'Articles', 'About', 'Contact'];

function App() {
  const [page, setPage] = React.useState('Home');
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding onClick={() => setPage(item)}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div style={{ marginBottom: 80 }}>
      <div style={{ marginBottom: 80 }}>
        <AppBar component="nav">
          <Toolbar style={{ backgroundColor: '#82b04c' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
            <Box sx={{ margin: { xs: '0 auto', sm: 0 } }}>
              <img src={logo} width="130" alt="logo" style={{ marginRight: 16 }} />
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff' }} onClick={() => setPage(item) }>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </div>
      {page === 'Home' &&
        <div style={{ textAlign: 'center' }}>
          <h1 className="title">Groundbreaking.</h1>
          <h1 className="title">Earth shaking.</h1>
          <h1 className="title" style={{ fontSize: '7em' }}>Dirt.</h1>
          <h1 className="title" style={{ fontWeight: 300, marginTop: 50 }}>You've never seen it quite like this.</h1>
          <p style={{ width: '100%', fontSize: 30, marginTop: 100, marginBottom: 0 }}>The best dirt money can buy. Each and every yard is hand-filtered to perfection.</p>
          <img src={dirtMound} alt="logo" style={{ width: '100%', margin: '0 auto', display: 'block' }} />
        </div>
      }
      {page === 'About' &&
        <div style={{ margin: '0 15%' }}>
          <h1>About</h1>
          <p style={{ fontSize: 20 }}>Itty Bitty Dirt Co. is a topsoil company that will sell you high quality, filtered to perfection dirt. We believe in staying small and local, so you can get your hands on our dirt.</p>
        </div>
      }
      {page === 'Articles' &&
        <div><Article1 /></div>
      }
      {page === 'Contact' &&
        <div style={{ margin: '0 15%' }}>
          <h1>About</h1>
          <p style={{ fontSize: 20 }}>Stefan @ 907-907-907</p>
          <p style={{ fontSize: 20 }}>E-mail: stefan@ittybittydirt.co</p>
        </div>
      }
    </div>
  );
}

export default App;
