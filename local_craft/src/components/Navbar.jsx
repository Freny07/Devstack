import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          LocalCraft<span className="logo-dot">.</span>
        </Link>

        <div className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink to="/discover" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Discover</NavLink>
          <NavLink
            to="/artisans"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Artisans
          </NavLink>
        </div>

        <div className="navbar-actions">
          <button className="btn-login">Login</button>

          <Link to="/cart" className="cart-icon-container">
            Cart
          </Link>

          <button
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/discover" onClick={() => setIsMobileMenuOpen(false)}>
            Discover
          </NavLink>
          <NavLink to="/artisans" onClick={() => setIsMobileMenuOpen(false)}>
            Artisans
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;