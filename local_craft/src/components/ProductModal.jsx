import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ProductModal.css';

const ProductModal = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const [feedback, setFeedback] = useState('');

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    addToCart(product);
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: 'spring', damping: 25, stiffness: 300 }
    },
    exit: { opacity: 0, scale: 0.8 }
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="product-modal-overlay"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div 
          className="product-modal vintage-card"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <button className="close-btn" onClick={onClose}>
            <X size={28} />
          </button>

          <div className="product-modal-content">
            <div className="modal-image-container">
              <motion.img 
                src={product.image} 
                alt={product.name} 
                className="modal-image"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 0.5, type: 'spring' }}
              />
            </div>

            <div className="modal-details">
              <h2 className="modal-product-title">{product.name}</h2>
              <div className="modal-category">{product.category}</div>
              
              <div className="modal-ratings">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < Math.floor(product.rating) ? "var(--color-accent)" : "none"} color="var(--color-accent)"/>
                ))}
                <span>({product.reviews} reviews)</span>
              </div>

              <div className="modal-price">₹{product.price}</div>

              <p className="modal-desc">{product.description}</p>
              
              <div className="seller-box">
                <h4>Crafted by: {product.seller}</h4>
                <p>{product.sellerStory}</p>
              </div>

              <div className="modal-actions">
                <button className="btn-primary add-to-cart-btn" onClick={handleAddToCart}>
                  <ShoppingCart size={20} /> Add to Cart
                </button>
              </div>

              <div className="feedback-section">
                <h4>Leave a Feedback for the Artisan</h4>
                <textarea 
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Your words of encouragement matter..."
                  rows="2"
                />
                <button className="btn-secondary submit-feedback">Submit Feedback</button>
              </div>
            </div>
          </div>
          
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;
