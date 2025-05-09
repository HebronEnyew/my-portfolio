import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <motion.a 
          href="/" 
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          HEBRON
        </motion.a>
        
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <motion.a 
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >About</motion.a>
          <motion.a 
            href="#skills"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >Skills</motion.a>
          <motion.a 
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >Projects</motion.a>
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >Contact</motion.a>
        </nav>
        
        <button 
          className="menu-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={isMenuOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 45 },
              closed: { rotate: 0 }
            }}
          >
            ☰
          </motion.div>
        </button>
      </div>
    </header>
  );
};

export default Header;