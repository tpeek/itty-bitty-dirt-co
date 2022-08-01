import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import logo from './logo.png';
import dirtMound from './dirt_mound.jpeg';
import * as React from 'react';
import Article1 from './Article1';

const navItems = ['Home', 'Articles', 'About', 'Contact'];

function App() {
  const [page, setPage] = React.useState('Home');

  return (
    <div style={{ marginBottom: 80 }}>
      <div style={{ marginBottom: 80 }}>
        <AppBar component="nav">
          <Toolbar style={{ backgroundColor: '#82b04c' }}>
            <img src={logo} width="130" alt="logo" style={{ marginRight: 16 }} />
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }} onClick={() => setPage(item) }>
                {item}
              </Button>
            ))}
          </Toolbar>
        </AppBar>
      </div>
      {page === 'Home' &&
        <div>
          <div>
            <h1 style={{ fontSize: 110, fontWeight: 700, textAlign: 'center', margin: 0 }}>Groundbreaking.</h1>
            <h1 style={{ fontSize: 110, fontWeight: 700, textAlign: 'center', margin: 0 }}>Earth shaking.</h1>
            <h1 style={{ fontSize: 110, fontWeight: 700, textAlign: 'center', margin: 0 }}><span style={{ textDecoration: 'line-through'}}>Love making.</span> Dirt.</h1>
            <h1 style={{ fontSize: 110, fontWeight: 300, textAlign: 'center', marginTop: 0 }}>You've never seen dirt quite like this.</h1>
            <p style={{ width: 1200, margin: '0 auto', fontSize: 30 }}>The best dirt you'll ever find. Each and every yard is hand-filtered to perfection.</p>
            <img src={dirtMound} alt="logo" style={{ margin: '0 auto', display: 'block' }} />
          </div>
        </div>
      }
      {page === 'About' &&
        <div style={{ margin: '0 20%' }}>
          <h1>About</h1>
          <p style={{ fontSize: 20 }}>Itty Bitty Dirt Co. is a topsoil company that will sell you high quality, filtered to perfection dirt. We believe in staying small and local, so you can get your hands on our dirt.</p>
        </div>
      }
      {page === 'Articles' &&
        <div><Article1 /></div>
      }
      {page === 'Contact' &&
        <div style={{ margin: '0 20%' }}>
          <h1>About</h1>
          <p style={{ fontSize: 20 }}>Stefan @ 907-907-907</p>
          <p style={{ fontSize: 20 }}>E-mail: stefan@ittybittydirt.co</p>
        </div>
      }
    </div>
  );
}

export default App;
