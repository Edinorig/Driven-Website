import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import ContactUs from './pages/ContactUs/ContactUs';
import LearnMore from './pages/LearnMore';
import Services from './pages/Services';
import './assets/font/font.css'
import Header from './components/Header';
import PaintProtectionFilmPackages from './pages/PaintProtectionFilmPackages';

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
          <Route path='/services/window-tinting' element={<LearnMore/>} />
          <Route path='/services/vynil-wrap-services' element={<LearnMore/>} />
          <Route path='/services/detaling/package-detaling' element={<LearnMore/>} />
          <Route path='/services/detaling/exterior-detaling' element={<LearnMore/>} />
          <Route path='/services/detaling/interior-detaling' element={<LearnMore/>} />
          <Route path='/services/paintless-dent-repair' element={<LearnMore/>} />
          <Route path="*" element={<p>Not found!</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
