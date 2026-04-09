import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './LoginModal.css';

const LoginModal = () => {
  const { isLoginModalOpen, closeLoginModal, login } = useAuth();
  const [loginType, setLoginType] = useState('buyer'); // 'buyer' or 'seller'
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });

  if (!isLoginModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ 
      name: formData.name || (loginType === 'buyer' ? 'Guest Buyer' : 'Local Seller'), 
      type: loginType 
    });
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring', damping: 25, stiffness: 300 }
    },
    exit: { opacity: 0, y: 50, scale: 0.95 }
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="modal-overlay"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div 
          className="login-modal vintage-card"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <button className="close-btn" onClick={closeLoginModal}>
            <X size={24} />
          </button>
          
          <h2 className="modal-title">Welcome to LocalCraft</h2>
          <p className="modal-subtitle">Join our community of authentic Indian craft</p>

          <div className="login-type-toggle">
            <button 
              className={loginType === 'buyer' ? 'active' : ''} 
              onClick={() => setLoginType('buyer')}
            >
              I am a Buyer
            </button>
            <button 
              className={loginType === 'seller' ? 'active' : ''} 
              onClick={() => setLoginType('seller')}
            >
              I am an Artisan
            </button>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone / Email</label>
              <input 
                type="text" 
                placeholder="Enter connection details" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                placeholder="••••••" 
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>
            
            {loginType === 'seller' && (
              <div className="form-group">
                <label>Craft Category</label>
                <select>
                  <option>Pottery</option>
                  <option>Clothing & Textiles</option>
                  <option>Jewelry</option>
                  <option>Handmade Food / Spices</option>
                  <option>Paintings</option>
                </select>
              </div>
            )}

            <button type="submit" className="btn-primary form-submit">
              {loginType === 'buyer' ? 'Enter Marketplace' : 'Open My Shop'}
            </button>
          </form>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoginModal;
