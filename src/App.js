import './App.css';
import Brand from './brand/Brand';
import Center from './centeroffer/Center';
import Footer from './footer/Footer';
import Hero from './hero/Hero';
import Hero2 from './hero2/Hero2';
import Nav from './nav/Nav';
import Offer from './offer/Offer';
import Offers from './offers/Offers';
import Plan from './plan/Plan';


function App() {
  return (
    <div className="App">
      <Nav />
      <Hero/>
      <Brand/>
      <Hero2/>
      <Plan/>

<div className='of'>
<Offer/>
<Center/>
<Offers/>
</div>

<Footer/>

    </div>
  );
}

export default App;
