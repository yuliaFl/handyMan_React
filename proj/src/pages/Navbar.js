import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#Home">Home</a></li>
        <li><a href="#Kitchen">Kitchen</a></li>
        <li><a href="#Bedroom">Bedroom</a></li>
        <li><a href="#Bathroom">Bathroom</a></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;