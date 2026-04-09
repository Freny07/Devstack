import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <div className="vintage-card empty-cart-card">
          <h2>Your Market Basket is Empty</h2>
          <p>Discover beautiful handcrafted items created by local artisans.</p>
          <div className="ornament-divider"></div>
          <Link to="/discover" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Explore Market <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Your Market Basket</h1>
        <p>You are supporting local artisans with every purchase.</p>
      </div>

      <div className="cart-container">
        <motion.div 
          className="cart-items"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {cartItems.map((item) => (
            <motion.div key={item.id} className="cart-item vintage-card" variants={itemVariants}>
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-artisan">by {item.seller}</p>
                <div className="cart-item-price">₹{item.price}</div>
              </div>
              <div className="cart-item-actions">
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <Plus size={16} />
                  </button>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  <Trash2 size={20} />
                </button>
                <div className="item-subtotal">
                  Subtotal: <strong>₹{item.price * item.quantity}</strong>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="cart-summary vintage-card">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{getCartTotal()}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free (Local Support)</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>₹{getCartTotal()}</span>
          </div>
          
          <div className="ornament-divider" style={{ margin: '1.5rem 0' }}></div>
          
          <button className="btn-primary checkout-btn" onClick={() => alert('Checkout Flow Initiated!')}>
            Proceed to Secure Checkout
          </button>
          <div className="secure-checkout-note">Guaranteed safe & secure checkout</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
