import './App.css';
import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero' 
import Store from './Components/Store/Store';
import Seller from './Components/Seller/Seller';
import Cta from './Components/Cta/Cta';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <>
 <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/store" element={<Store />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/cta" element={<Cta />} />
      </Routes>
      <Footer />
    </Router>
   </>
  );
}

export default App;
