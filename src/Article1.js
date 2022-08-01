import image from './article1_image.png';

const Header = props => <h1 style={{ fontSize: 26 }} {...props} />;

const Para = props => <p style={{ fontSize: 20 }} {...props} />;

const Article1 = () => {
    return (
<div>
  <h1 style={{ textAlign: 'center', fontSize: 40 }}>What Is Topsoil? The Importance of Having Healthy Topsoil</h1>
  <img src={image} alt="plants" width="800" style={{ margin: '0 auto', display: 'block' }}></img>
  <caption style={{ margin: '0 auto', display: 'block' }}>Image Source: Pexels</caption>
  <div style={{ margin: '0 20%'}}>
    <Para>Topsoil is the layer of loose, fertile soil found directly beneath the first few inches of earth in almost any natural landscape. In urban areas, topsoil is often referred to as “subsoil” and is most commonly seen in new construction projects when excavators are digging up the ground to lay utilities, build structures, or create basements. The depth and quality of topsoil varies depending on a variety of factors such as location and geology. Topsoil can be shallow or deep; it can be acidic or alkaline; it can be sandy or clayey; it can even be rich with nutrients or completely void of them. Whatever its makeup, healthy topsoil is crucial to maintaining a strong ecosystem and growing plants successfully.</Para>

    <Header>What Does Healthy Topsoil Look and Feel Like?</Header>
    <Para>If you’re lucky enough to have a yard with plenty of topsoil, you’ll likely be able to dig down about 6-12 inches before hitting a hard subsoil layer. Healthy topsoil is dark in color, moist but not wet, and rich in texture. It should crumble easily in your hands instead of forming a compact clump. If you’re lucky enough to have a yard with plenty of topsoil, you’ll likely be able to dig down about 6-12 inches before hitting a hard subsoil layer. Healthy topsoil is dark in color, moist but not wet, and rich in texture. It should crumble easily in your hands instead of forming a compact clump.</Para>


    <Header>Why Is Healthy Topsoil Important?</Header>
    <Para>Healthy topsoil is the starting point for all plant life. New topsoil is created each year as plants die and decompose, filling the spaces below with new mineral and organic matter. Topsoil stores nutrients and water, regulates soil pH, and harbors a wide variety of microorganisms, insects, and animals. Healthy topsoil is the starting point for all plant life. New topsoil is created each year as plants die and decompose, filling the spaces below with new mineral and organic matter. Topsoil stores nutrients and water, regulates soil pH, and harbors a wide variety of microorganisms, insects, and animals.</Para>


    <Header>How Can We Maintain Healthy Topsoil?</Header>
    <Para>The best method for maintaining healthy topsoil is to be mindful of your gardening practices. Routinely add organic matter such as compost or mulch to your garden beds to increase soil volume and retain nutrients. Avoid using chemical pesticides in your garden, as they can have negative effects on soil health and pollinators. Plant covers and perennials in your garden to provide shade and shelter for earthworms and insects. Plant a variety of plants to encourage biodiversity and prevent any one species from overpopulating. The best method for maintaining healthy topsoil is to be mindful of your gardening practices. Routinely add organic matter such as compost or mulch to your garden beds to increase soil volume and retain nutrients. Avoid using chemical pesticides in your garden, as they can have negative effects on soil health and pollinators. Plant covers and perennials in your garden to provide shade and shelter for earthworms and insects. Plant a variety of plants to encourage biodiversity and prevent any one species from overpopulating.</Para>


    <Header>Summary</Header>
    <Para>Topsoil is the soil that is found at the surface of the ground, just below the first layer of subsoil. It is dark in color and crumbles easily in your hands. It is crucial to maintain healthy topsoil as it is the starting point for all plant life. Healthy topsoil is important as it stores nutrients and water and regulates soil pH. The best way to maintain healthy topsoil is to be mindful of your gardening practices, such as adding organic matter and avoiding chemical pesticides.</Para>
  </div>
</div>)
}




export default Article1
