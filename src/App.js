import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import ContactUs from './pages/ContactUs/ContactUs';
import LearnMore from './pages/LearnMore';
import Services from './pages/Services';
import './assets/font/font.css'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact-us' element={<ContactUs/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/learn-more' element={<LearnMore/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
