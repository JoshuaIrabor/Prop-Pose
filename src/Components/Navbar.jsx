import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            PPB
          </Link>

          <Link to="/signup" className="sign-button">
            SignUp
          </Link>
          {/* Hamburger stays in navbar */}
          {!open && (
            <div className="menu-icon" onClick={toggleMenu}>
              <Menu />
            </div>
          )}
        </div>
      </nav>

      {/* SIDE SLIDE MENU */}
      <div className={open ? "side-menu open" : "side-menu"}>
        
        {/* X INSIDE SLIDING MENU */}
        <div className="close-icon" onClick={closeMenu}>
          <X />
        </div>

        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
      </div>

      {/* OVERLAY */}
      {open && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default Navbar;
