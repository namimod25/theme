import { NavLink } from "react-router-dom";
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
    return (
      <nav className="navbar">
        <NavLink 
          to="/" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          About
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          Contact
        </NavLink>
        <NavLink 
          to="/tech" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          Tech
        </NavLink>
      </nav>
    );
  };
  
  export default Navbar;