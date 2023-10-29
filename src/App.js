import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home/Home';
import ContactUs from './pages/ContactUs/ContactUs';
import LearnMore from './pages/LearnMore';
import Services from './pages/Services';
import PaintProtectionFilmPackages from './pages/PaintProtectionFilmPackages/PaintProtectionFilmPackages';
import Tinting from './pages/Tinting/Tinting';
import VynilWrap from './pages/VynilWrap/VynilWrap';
import PackageDetaling from './pages/PackageDetaling/PackageDetaling';
import InteriorDetaling from './pages/InteriorDetaling/InteriorDetaling';
import ExteriorDetaling from './pages/ExteriorDetaling/ExteriorDetaling';
import PaintlessDentRepair from './pages/PaintlessDentRepair/PaintlessDentRepair';
import './App.css';
import './assets/font/font.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact-us' element={<ContactUs/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/learn-more' element={<LearnMore/>} />
          <Route path='/services/paint-protection-film/paint-protection-film-packages' element={<PaintProtectionFilmPackages/>} />
          <Route path='/services/paint-protection-film/cosmetic-paint-protection-film' element={<LearnMore/>} />
          <Route path='/services/ceramic-coating/ceramic-coating-packages' element={<LearnMore/>} />
          <Route path='/services/window-tinting' element={<Tinting/>} />
          <Route path='/services/vynil-wrap-services' element={<VynilWrap/>} />
          <Route path='/services/detaling/package-detaling' element={<PackageDetaling/>} />
          <Route path='/services/detaling/exterior-detaling' element={<ExteriorDetaling/>} />
          <Route path='/services/detaling/interior-detaling' element={<InteriorDetaling/>} />
          <Route path='/services/paintless-dent-repair' element={<PaintlessDentRepair/>} />
          <Route path="*" element={<p>Not found!</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
