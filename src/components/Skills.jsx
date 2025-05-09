import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    'JavaScript (ES6+)',
    'React',
    'Node.js',
    'TypeScript',
    'HTML & CSS',
    'Git',
    'Python',
    'SQL'
  ];

  return (
    <section id="skills">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="skill-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;