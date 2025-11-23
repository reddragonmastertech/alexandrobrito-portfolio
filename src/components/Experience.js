import React from 'react';
import { experience } from '../data/experience';
import { motion } from 'framer-motion';

// Import images
import nixImg from '../Assets/n-ix.jpg';
import qareaImg from '../Assets/qarea.jpg';
import sombraincImg from '../Assets/sombra_inc.jpg';


const Experience = () => {
  // Function to get the correct image based on company name
  const getCompanyImage = (company) => {
    const imageMap = {
      'N-IX': nixImg,
      'QArea': qareaImg,
      'Sombra Inc': sombraincImg,
    };
    
    // Find matching company name
    for (const [key, value] of Object.entries(imageMap)) {
      if (company.includes(key)) {
        return value;
      }
    }
    
    // Fallback to first image if no match found
    return nixImg;
  };

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-xl"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-500/5 to-orange-500/5 rounded-full blur-lg"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-pink-500"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-12"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-2 top-0 w-4 h-4 bg-gradient-to-r from-primary to-purple-500 rounded-full border-2 border-background shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  whileHover={{ scale: 1.2 }}
                />

                {/* Floating accent */}
                <motion.div 
                  className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full opacity-60"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 0.9, 0.6]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <motion.div 
                  className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                  whileHover={{ 
                    scale: 1.01,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left side - Content */}
                    <div className="flex-1 flex flex-col">
                      <div className="mb-4">
                        {/* Title */}
                        <motion.h3 
                          className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-2"
                          whileHover={{ scale: 1.02 }}
                        >
                          {exp.title}
                        </motion.h3>
                        
                        {/* Company under title */}
                        <motion.span 
                          className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
                          whileHover={{ scale: 1.01 }}
                        >
                          {exp.company}
                        </motion.span>
                      </div>
                      
                      <ul className="space-y-2 mb-6 flex-1 flex flex-col justify-end">
                        {exp.bullets.map((bullet, bulletIndex) => (
                          <motion.li 
                            key={bulletIndex}
                            className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index * 0.1) + (bulletIndex * 0.05) }}
                          >
                            <motion.div 
                              className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-purple-500 rounded-full mt-2 flex-shrink-0"
                              whileHover={{ scale: 1.5 }}
                            />
                            <span>{bullet}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Right side - Location/Period and Image */}
                    <motion.div 
                      className="flex-shrink-0 w-full sm:w-64 lg:w-72 xl:w-80 flex flex-col items-end"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {/* Location and Period above image */}
                      <div className="flex flex-col gap-2 mb-4 w-full">
                        <motion.div 
                          className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent text-right"
                          whileHover={{ scale: 1.02 }}
                        >
                          📍 {exp.location}
                        </motion.div>
                        <motion.div 
                          className="text-base sm:text-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent text-right"
                          whileHover={{ scale: 1.05 }}
                        >
                          ⏰ {exp.period}
                        </motion.div>
                      </div>

                      {/* Image */}
                      <motion.div 
                        className="relative w-full aspect-video rounded-lg border border-border/30 shadow-md overflow-hidden"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.img
                          src={getCompanyImage(exp.company)}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-cover"
                          whileHover={{ 
                            scale: 1.05,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;