import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Citizenship from './pages/Citizenship';
import Residence from './pages/Residence';
import About from './pages/About';
import Contact from './pages/Contact';
import ComingSoon from './components/ComingSoon';
import { defaultCitizenshipSlug } from './data/citizenshipPrograms';
import { defaultResidenceSlug } from './data/residencePrograms';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citizenship" element={<Navigate to={`/citizenship/${defaultCitizenshipSlug}`} replace />} />
        <Route path="/citizenship/:slug" element={<Citizenship />} />
        <Route path="/residence" element={<Navigate to={`/residence/${defaultResidenceSlug}`} replace />} />
        <Route path="/residence/:slug" element={<Residence />} />
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
