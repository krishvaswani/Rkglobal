import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';
import Citizenship from './pages/Citizenship';
import Residence from './pages/Residence';
import About from './pages/About';
import Contact from './pages/Contact';
import ComingSoon from './component/ComingSoon';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citizenship" element={<Citizenship />} />
        <Route path="/residence" element={<Residence />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<ComingSoon title="Our Services" />} />
        <Route path="*" element={<ComingSoon title="Not Found" />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
