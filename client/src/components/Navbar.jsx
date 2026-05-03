import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">HomeVista Interior</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <Link to="/contact">Contact</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}