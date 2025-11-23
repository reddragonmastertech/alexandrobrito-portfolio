import React from 'react';
import { education } from '../data/education';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-xl"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-lg"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
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
            Education
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-green-500 to-blue-500"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          <div className="space-y-8">
            {education.map((edu, index) => (
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
                  className="absolute left-2 top-0 w-4 h-4 bg-gradient-to-r from-primary to-green-500 rounded-full border-2 border-background shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  whileHover={{ scale: 1.2 }}
                />

                {/* Floating accent */}
                <motion.div 
                  className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 0.9, 0.6]
                  }}
                  transition={{ 
                    duration: 2.5,
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
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    {/* Column 1 - Image */}
                    <motion.div 
                      className="w-full"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.1 }}
                    >
                      <motion.div 
                        className="relative w-full aspect-video rounded-lg border border-border/30 shadow-md overflow-hidden"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.img
                          src={edu.image}
                          alt={`${edu.institution} image`}
                          className="w-full h-full object-cover"
                          whileHover={{ 
                            scale: 1.05,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </motion.div>

                    {/* Column 2 - Degree and Institution */}
                    <motion.div 
                      className="w-full text-center md:text-left"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      <motion.h3 
                        className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-2"
                        whileHover={{ scale: 1.02 }}
                      >
                        {edu.degree}
                      </motion.h3>
                      
                      <motion.span 
                        className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.01 }}
                      >
                        {edu.institution}
                      </motion.span>
                    </motion.div>

                    {/* Column 3 - Location and Period */}
                    <motion.div 
                      className="w-full text-center md:text-right"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <div className="flex flex-col gap-2">
                        <motion.div 
                          className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"
                          whileHover={{ scale: 1.02 }}
                        >
                          📍 {edu.location}
                        </motion.div>
                        <motion.div 
                          className="text-base sm:text-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent"
                          whileHover={{ scale: 1.05 }}
                        >
                          ⏰ {edu.period}
                        </motion.div>
                      </div>
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

export default Education;