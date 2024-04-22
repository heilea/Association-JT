import './App.scss';
import logo from './assets/yt-logo.jpg';
import { HomePage } from './components/homePage/HomePage';
import { About } from './components/about/About';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';





export const App: React.FC = () => {

  return (
    
      <Router>
        <header>
        <img src={logo} alt="" />
          <nav>
          <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Accueil</NavLink>
          

            <NavLink to="/about"className={({ isActive }) => isActive ? "active-link" : ""}>À Propos</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
        </Routes>

      <footer>
      <img src={logo} alt="logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>

      </Router> 
  )
}