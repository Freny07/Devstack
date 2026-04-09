import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, MapPin } from 'lucide-react';
import './Artisans.css';

const mockArtisans = [
  {
    id: 1,
    name: 'Rakesh Sharma',
    specialty: 'Master Potter',
    location: 'Jaipur, Rajasthan',
    rating: 4.9,
    reviews: 340,
    image: '/artisan1.png',
    story: 'For me, clay is like language. It speaks of the earth it came from and the hands that shaped it. I have been turning the wheel for 45 years, passing down the techniques my great-grandfather taught me.',
    supportTags: ['Funds for new Kiln', 'Raw Material Cost']
  },
  {
    id: 2,
    name: 'Saraswati Weavers',
    specialty: 'Khadi & Silk Textiles',
    location: 'Varanasi, Uttar Pradesh',
    rating: 4.8,
    reviews: 512,
    image: '/artisan2.png',
    story: 'A collective of 12 women. We weave our histories into every saree. When you buy our cloth, you make sure our daughters go to school instead of the factory.',
    supportTags: ['Community Fund', 'Education Drive']
  },
  {
    id: 3,
    name: 'Abdul Kasali',
    specialty: 'Brass Engraver',
    location: 'Moradabad, Uttar Pradesh',
    rating: 4.7,
    reviews: 180,
    image: '/artisan3.png',
    story: 'The hammer and chisel are my pens. In Moradabad, the brass city, we breathe metal dust but we dream in gold. Our intricate designs echo the Mughal era aesthetics.',
    supportTags: ['Better Workspace', 'Apprentice Stipends']
  }
];

const Artisans = () => {
  const [feedbackInput, setFeedbackInput] = useState('');

  const handleSupport = (artisanName) => {
    alert(`Thank you for wanting to support ${artisanName}! A payment link would open here.`);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if(feedbackInput.trim() === '') return;
    alert("Thank you! Your feedback will be delivered directly to the artisans via our community leaders.");
    setFeedbackInput('');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="artisans-page">
      <div className="artisans-header">
        <h1>Meet the Makers</h1>
        <p>Behind every object is a pair of hands. Read their stories, discover their heritage, and support their craft directly.</p>
      </div>

      <div className="ornament-divider" style={{ margin: '2rem 0' }}></div>

      <motion.div 
        className="artisans-list"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {mockArtisans.map((artisan) => (
          <motion.div key={artisan.id} className="artisan-card vintage-card" variants={itemVariants}>
            <div className="artisan-image">
              <img src={artisan.image} alt={artisan.name} />
            </div>
            
            <div className="artisan-details">
              <div className="artisan-info-header">
                <div>
                  <h2>{artisan.name}</h2>
                  <div className="artisan-meta">
                    <span className="specialty">{artisan.specialty}</span>
                    <span className="location"><MapPin size={14}/> {artisan.location}</span>
                  </div>
                </div>
                <div className="artisan-ratings">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < Math.floor(artisan.rating) ? "var(--color-accent)" : "none"} color="var(--color-accent)"/>
                    ))}
                  </div>
                  <span>({artisan.reviews})</span>
                </div>
              </div>

              <div className="artisan-story">
                <div className="quote-mark">"</div>
                {artisan.story}
              </div>

              <div className="support-section">
                <h4>How you can help:</h4>
                <div className="support-tags">
                  {artisan.supportTags.map((tag, idx) => (
                    <span key={idx} className="support-tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="artisan-actions">
                <button className="btn-primary support-btn" onClick={() => handleSupport(artisan.name)}>
                  <Heart size={18} fill="currentColor" /> Support Artisan
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="general-feedback-section vintage-card">
        <h2>Write to the Community</h2>
        <p>Your words encourage those who spend their lives creating beauty. Drop a general greeting or specific feedback to our artist network.</p>
        <form onSubmit={handleFeedbackSubmit}>
          <textarea 
            placeholder="E.g., Your crafts remind me of my childhood..."
            value={feedbackInput}
            onChange={(e) => setFeedbackInput(e.target.value)}
            rows="4"
          />
          <button type="submit" className="btn-secondary">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Artisans;
