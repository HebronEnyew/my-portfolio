import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "Qr Code generator web app",
      tags: ["React", "JavaScript", "MongoDB"],
      link: "#",
      github: "#"
    },
    {
      title: "Project Two",
      description: "A modern web application with React and Node.",
      tags: ["Next.js", "Stripe", "Firebase"],
      link: "#",
      github: "#"
    },
    {
      title: "Project Three",
      description: "E-commerce platform with payment integration",
      tags: ["Next.js", "Stripe", "Firebase"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;