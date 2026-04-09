import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, HeartHandshake, Map, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const categories = [
    { name: 'Pottery', img: '/prod5.png', desc: 'Hand-shaped clay from ancient wheels.' },
    { name: 'Textiles', img: '/prod3.png', desc: 'Woven khadi and natural indigo threads.' },
    { name: 'Jewelry', img: '/prod1.png', desc: 'Intricate silver born from royal courts.' },
    { name: 'Food & Spices', img: '/prod6.png', desc: 'Authentic flavors from grandmothers.' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className="hero-title">
            The Soul of India, <br/> Crafted by Hand.
          </motion.h1>
          <motion.p variants={fadeInUp} className="hero-subtitle">
            Discover authentic local crafts, directly from the streets and villages to your home. Support artisans and preserve a 200-year-old heritage.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link to="/discover" className="btn-primary hero-btn">
              Explore Collection <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <div className="ornament-divider"></div>

      {/* Featured Categories with Images */}
      <section className="featured-section">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h2>Treasures of the Market</h2>
          <p>Delve into categories forged by generations of skill</p>
        </motion.div>

        <motion.div 
          className="categories-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {categories.map((cat, i) => (
            <motion.div key={i} className="category-card vintage-card" variants={fadeInUp}>
              <div className="cat-img-wrapper">
                <img src={cat.img} alt={cat.name} />
              </div>
              <div className="cat-info">
                <h3>{cat.name}</h3>
                <p>{cat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Heritage Split Layout Section */}
      <section className="heritage-section">
        <div className="heritage-container">
          <motion.div 
            className="heritage-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>Preserving the Loom, The Wheel, and The Chisel</h2>
            <p>Every piece in our marketplace carries a heartbeat. We travel to the deepest corners of Rajasthan, the misty hills of Meghalaya, and the crowded streets of Varanasi to bring you crafts that tell a story.</p>
            <p className="heritage-highlight">When you buy from LocalCraft, you are not just getting a product; you are keeping a 200-year-old lineage alive.</p>
            <Link to="/artisans" className="btn-secondary">Meet The Makers</Link>
          </motion.div>
          <motion.div 
            className="heritage-image-box vintage-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
            viewport={{ once: true }}
          >
            <img src="/artisan2.png" alt="Indian Weaver" />
          </motion.div>
        </div>
      </section>

      <div className="ornament-divider"></div>

      {/* Our Promise / Values Section */}
      <section className="promise-section">
        <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2>Our Promise</h2>
        </motion.div>
        <motion.div className="promise-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div className="promise-card" variants={fadeInUp}>
            <Map size={40} className="promise-icon" />
            <h3>Authentic Origins</h3>
            <p>Sourced directly from the doorsteps of rural craftsmen, bypassing large-scale factories.</p>
          </motion.div>
          <motion.div className="promise-card" variants={fadeInUp}>
            <HeartHandshake size={40} className="promise-icon" />
            <h3>Fair Support</h3>
            <p>Every rupee makes a difference. We ensure pure profit reaches the artisan families directly.</p>
          </motion.div>
          <motion.div className="promise-card" variants={fadeInUp}>
             <ShieldCheck size={40} className="promise-icon" />
            <h3>Preserved Legacy</h3>
            <p>By bringing them online, we revive ancient techniques that are at risk of disappearing.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonial / Story Section */}
      <section className="story-section">
        <motion.div 
          className="story-container vintage-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="quote-icon">❝</div>
          <div className="testimonial-content">
            <div className="testimonial-avatar">
              <img src="/artisan1.png" alt="Rakesh Potter" />
            </div>
            <div>
              <p className="story-text">
                "These aren't just products; they are pieces of history passed down through hands that refuse to let tradition die. 
                LocalCraft gave my art a voice beyond my small village street."
              </p>
              <div className="story-author">
                — Rakesh Sharma, Master Potter from Rajasthan
                <div className="ratings">
                  <Star size={16} fill="var(--color-accent)" color="var(--color-accent)"/>
                  <Star size={16} fill="var(--color-accent)" color="var(--color-accent)"/>
                  <Star size={16} fill="var(--color-accent)" color="var(--color-accent)"/>
                  <Star size={16} fill="var(--color-accent)" color="var(--color-accent)"/>
                  <Star size={16} fill="var(--color-accent)" color="var(--color-accent)"/>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;
