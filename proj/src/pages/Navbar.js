import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#Home">Home</a></li>
        <li><a href="#Kitchen">Kitchen</a></li>
        <li><a href="#Bedroom">Bedroom</a></li>
        <li><a href="#Bathroom">Bathroom</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;