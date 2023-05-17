import "./navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <h2 className="logo">LOGO</h2>
      <nav className="navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <button className="btnLogin-popup">Login</button>
      </nav>
    </div>
  );
}

export default Navbar;
