import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductModal from '../components/ProductModal';
import './Discover.css';

const mockProducts = [
  {
    id: 1,
    name: 'Antique Silver Anklet',
    category: 'Jewelry',
    price: 3500,
    rating: 4.8,
    reviews: 120,
    image: '/prod1.png',
    description: 'Handcrafted silver anklet with delicate bells, echoing the classical dances of old India.',
    seller: 'Meena Jewelers',
    sellerStory: 'Our family has been shaping silver into art for over 4 generations in the alleys of Jaipur.'
  },
  {
    id: 2,
    name: 'Organic Neem Soap',
    category: 'Soap',
    price: 350,
    rating: 4.5,
    reviews: 85,
    image: '/prod2.png',
    description: 'Pure handmade soap infused with neem and tulsi leaves, providing deep cleansing and a natural earthy aroma.',
    seller: 'Village Naturals',
    sellerStory: 'We source pure ingredients directly from sacred village groves.'
  },
  {
    id: 3,
    name: 'Khadi Cotton Kurta',
    category: 'Clothes',
    price: 1800,
    rating: 4.9,
    reviews: 210,
    image: '/prod3.png',
    description: 'Breathable hand-spun khadi cotton, dyed using natural indigo. A homage to the Swadeshi movement.',
    seller: 'Weavers Collective',
    sellerStory: 'Every thread is spun by women in rural Bengal, ensuring fair wages and sustainable art.'
  },
  {
    id: 4,
    name: 'Traditional Phool Jhadoo',
    category: 'Broom',
    price: 150,
    rating: 4.7,
    reviews: 300,
    image: '/prod4.png',
    description: 'A classic Indian broom made of premium tiger grass, bound together by strong handmade cord.',
    seller: 'Grassroots Goods',
    sellerStory: 'Harvested from the hills of Meghalaya, woven by the indigenous communities.'
  },
  {
    id: 5,
    name: 'Terracotta Water Pot',
    category: 'Crafts',
    price: 850,
    rating: 4.6,
    reviews: 145,
    image: '/prod5.png',
    description: 'Natural clay pot designed to keep water naturally cool and infused with earthly minerals.',
    seller: 'Mitti Masters',
    sellerStory: 'Formed on a manual potter\'s wheel in a tiny street of Delhi, baked in an open wood fire.'
  },
  {
    id: 6,
    name: 'Homemade Mango Pickle',
    category: 'Food',
    price: 450,
    rating: 4.9,
    reviews: 420,
    image: '/prod6.png',
    description: 'Sun-dried raw mangoes marinated in mustard oil and forgotten spices. Just like Dadi used to make.',
    seller: 'Amma\'s Kitchen',
    sellerStory: 'Preserving recipes that are meant to be cherished, not commercialized.'
  },
  {
    id: 7,
    name: 'Silk Embroidery Thread Set',
    category: 'Thread',
    price: 600,
    rating: 4.4,
    reviews: 56,
    image: '/prod7.png',
    description: 'Vibrant silk strings naturally dyed, perfect for Kantha or Zardosi work.',
    seller: 'The Dye House',
    sellerStory: 'Our ancestors dyed threads for royal courts, we bring the same quality to your craft.'
  },
  {
    id: 8,
    name: 'Block Print Carving Tool',
    category: 'Designing Things',
    price: 1200,
    rating: 4.8,
    reviews: 70,
    image: '/prod8.png',
    description: 'Hand-forged chisel designed specifically for carving intricate block print designs onto teak wood.',
    seller: 'Iron & Wood',
    sellerStory: 'A collaboration between the blacksmiths and woodcarvers of Gujarat.'
  }
];

const categories = ['All', 'Jewelry', 'Clothes', 'Crafts', 'Food', 'Soap', 'Broom', 'Thread', 'Designing Things'];

const Discover = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = selectedCategory === 'All' 
    ? mockProducts 
    : mockProducts.filter(p => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="discover-page">
      <div className="discover-header">
        <h1>Discover authentic Indian craft</h1>
        <p>A marketplace rooted in soil and sweat.</p>
        
        <div className="category-filters">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="ornament-divider" style={{ margin: '2rem 0' }}></div>

      <motion.div 
        className="products-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={selectedCategory}
      >
        {filteredProducts.map(product => (
          <motion.div 
            key={product.id} 
            className="product-card vintage-card"
            variants={itemVariants}
            onClick={() => setSelectedProduct(product)}
          >
            <div className="product-image-container">
              <img src={product.image} alt={product.name} />
              <div className="product-category-badge">{product.category}</div>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-artisan">by {product.seller}</p>
              <div className="product-price">₹{product.price}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />

    </div>
  );
};

export default Discover;
