import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'JavaScript (ES6+)',
    'React',
    'Node.js',
    'TypeScript',
    'HTML/CSS',
    'Git',
    'Python',
    'SQL'
  ];

  return (
    <section id="about">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="about-grid">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              Hello! I'm Hebron, a passionate software developer based in Web Development. 
              I specialize in building exceptional digital experiences.
            </p>
            
            <motion.ul className="skills-list">
              {skills.map((skill, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="image-wrapper">
              <div className="image-border"></div>
              <img 
                src="/src/components/heboo.jpg" 
                alt="Profile" 
                className="profile-image"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;