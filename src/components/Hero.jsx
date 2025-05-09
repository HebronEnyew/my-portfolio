import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [typedName, setTypedName] = useState('');
  const fullName = "Hebron Enyew.";
  const [nameAnimationComplete, setNameAnimationComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullName.length) {
        setTypedName(fullName.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setNameAnimationComplete(true);
      }
    }, 150); // Typing speed (150ms per character)

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="hero">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, my name is
        </motion.h2>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {typedName}
          {!nameAnimationComplete && <span className="blinking-cursor">|</span>}
        </motion.h1>
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I build things for the web.
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          I'm a software developer specializing in building exceptional digital experiences. 
          Currently focused on building accessible, human-centered products.
        </motion.p>
        
        <motion.a
          href="#contact"
          className="btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: 'rgba(100, 255, 218, 0.1)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;