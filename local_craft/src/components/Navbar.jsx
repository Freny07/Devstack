import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { cartItems } = useCart();
  const { user, openLoginModal } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          LocalCraft<span className="logo-dot">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-links">
          <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/discover" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Discover</NavLink>
          <NavLink to="/artisans" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Artisans</NavLink>
        </div>

        {/* Right Actions */}
        <div className="navbar-actions">
          {user ? (
            <div className="user-profile">
              <User size={20} />
              <span>{user.name}</span>
            </div>
          ) : (
            <button className="btn-login" onClick={openLoginModal}>
              Login
            </button>
          )}
          
          <Link to="/cart" className="cart-icon-container">
            <ShoppingCart size={24} />
            {totalCartItems > 0 && <span className="cart-badge">{totalCartItems}</span>}
          </Link>

          {/* Mobile Toggle */}
          <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/discover" onClick={() => setIsMobileMenuOpen(false)}>Discover</NavLink>
          <NavLink to="/artisans" onClick={() => setIsMobileMenuOpen(false)}>Artisans</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
