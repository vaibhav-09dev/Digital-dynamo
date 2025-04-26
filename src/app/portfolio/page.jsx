'use client';
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project 1',
    description: 'A creative campaign for a leading e-commerce brand.',
    image: '/project1.jpg',
  },
  {
    title: 'Project 2',
    description: 'A social media strategy for a global tech company.',
    image: '/project2.jpg',
  },
  {
    title: 'Project 3',
    description: 'A website redesign for a retail giant.',
    image: '/project3.jpg',
  },
  {
    title: 'Project 4',
    description: 'A performance marketing campaign for a startup.',
    image: '/project4.jpg',
  },
];

const OurWork = () => {
  return (
    <div className="h-auto w-full bg-gray-100 p-6 md:mt-20 md:p-12">
      {/* Title Section */}
      <motion.div
        className="text-center text-3xl md:text-5xl font-bold text-gray-800 mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Our <span className="text-green-500 animate-pulse">Work</span>
        </h1>
      </motion.div>

      {/* Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">{project.title}</h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;