import React, { useState, useEffect } from 'react';
import { projects } from '../data/projects';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <style jsx>{`
        .colorful-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .colorful-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }
        .colorful-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #8b5cf6, #06b6d4, #10b981, #f59e0b);
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
        }
        .colorful-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #7c3aed, #0891b2, #059669, #d97706);
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.8);
        }
      `}</style>
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-2xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-500/5 to-orange-500/5 rounded-full blur-xl"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 0.8, 1]
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Projects
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -8,
                transition: { 
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1]
                }
              }}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image Container */}
              <div 
                className="relative h-80 w-full overflow-hidden cursor-pointer"
                onClick={() => openModal(proj)}
              >
                <motion.img
                  src={proj.images && proj.images[0]}
                  alt={proj.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                  initial={{ opacity: 0, scale: 1.15 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: idx * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                />
                
                {/* Dark overlay - appears on hover */}
                <motion.div 
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-700 ease-out" 
                />
                
                {/* Project title - appears on hover */}
                <motion.div 
                  className="absolute bottom-6 left-6 right-6 z-10"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ 
                    opacity: hoveredProject === idx ? 1 : 0,
                    y: hoveredProject === idx ? 0 : 30
                  }}
                  transition={{ 
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <h3 className="text-white font-bold text-2xl drop-shadow-lg">
                    {proj.title}
                  </h3>
                </motion.div>

                {/* Spiral Wind Effect - appears on hover */}
                <AnimatePresence>
                  {hoveredProject === idx && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ 
                        duration: 0.5,
                        ease: "easeOut"
                      }}
                    >
                      {/* Spiral wind particles */}
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white/60 rounded-full"
                          style={{
                            left: '50%',
                            top: '50%',
                            transformOrigin: '0 0',
                          }}
                          initial={{
                            x: 0,
                            y: 0,
                            scale: 0,
                            rotate: i * 30,
                          }}
                          animate={{
                            x: [0, Math.cos(i * 30 * Math.PI / 180) * 100],
                            y: [0, Math.sin(i * 30 * Math.PI / 180) * 100],
                            scale: [0, 1, 0],
                            rotate: [i * 30, i * 30 + 360],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: [0.22, 1, 0.36, 1],
                            delay: i * 0.08,
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Visit Site Button - appears on hover at center */}
                {proj.url && proj.url.trim() !== '' && (
                  <motion.a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-500 shadow-lg hover:shadow-xl -ml-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: hoveredProject === idx ? 1 : 0,
                      scale: hoveredProject === idx ? 1 : 0.8
                    }}
                    transition={{ 
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence mode="wait">
        {isModalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={closeModal}
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.4 }}
            />
            
            {/* Modal Content - Increased Size */}
            <motion.div
              className="relative w-[98vw] max-w-[1600px] h-[95vh] rounded-2xl border border-border/50 bg-card/95 backdrop-blur-xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 40 }}
              transition={{ 
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {/* Close Button */}
              <motion.button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all duration-400"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 90,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Two Column Layout: Fixed 65:35 ratio */}
              <div className="grid grid-cols-1 lg:grid-cols-10 h-full">
                {/* Left Column - Image Carousel (65% width) */}
                <div className="lg:col-span-6 relative h-64 lg:h-full min-h-[500px] overflow-hidden group/carousel bg-black/5">
                  {/* Carousel Images with Slide Transition */}
                  <div className="relative w-full h-full overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        src={selectedProject.images && selectedProject.images[currentImageIndex]}
                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-contain object-center"
                        initial={{ 
                          x: 100,
                          opacity: 0,
                          scale: 0.95
                        }}
                        animate={{ 
                          x: 0,
                          opacity: 1,
                          scale: 1
                        }}
                        exit={{ 
                          x: -100,
                          opacity: 0,
                          scale: 0.95
                        }}
                        transition={{ 
                          duration: 0.6,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      />
                    </AnimatePresence>
                    
                    {/* Slide direction indicator overlay */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.3, 0] }}
                      transition={{ 
                        duration: 0.6,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </motion.div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />
                  
                  {/* Navigation Buttons */}
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <>
                      {/* Previous Button */}
                      <motion.button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all duration-500 opacity-0 group-hover/carousel:opacity-100 z-10"
                        whileHover={{ 
                          scale: 1.15,
                          x: -4,
                          transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </motion.button>

                      {/* Next Button */}
                      <motion.button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all duration-500 opacity-0 group-hover/carousel:opacity-100 z-10"
                        whileHover={{ 
                          scale: 1.15,
                          x: 4,
                          transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>

                      {/* Image Indicators */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {selectedProject.images.map((_, index) => (
                          <motion.button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`h-2 rounded-full transition-all duration-500 ${
                              index === currentImageIndex 
                                ? 'w-8 bg-white' 
                                : 'w-2 bg-white/50 hover:bg-white/80'
                            }`}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ 
                              delay: 0.3 + index * 0.05,
                              duration: 0.4,
                              ease: [0.22, 1, 0.36, 1]
                            }}
                            whileHover={{ 
                              scale: 1.3,
                              transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.8 }}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                
                {/* Right Column - Content (35% width) */}
                <div className="lg:col-span-4 flex flex-col h-full max-h-[calc(95vh-16rem)] lg:max-h-[95vh]">
                  {/* Header */}
                  <motion.div 
                    className="p-6 sm:p-8 lg:p-10 border-b border-border/20 flex-shrink-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.2,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <h2 className="font-bold text-2xl lg:text-3xl text-foreground">
                      {selectedProject.title}
                    </h2>
                  </motion.div>
                  
                  {/* Project Description Section */}
                  <div className="flex flex-col flex-1 min-h-0">
                    {/* Description - Fixed */}
                    {selectedProject.description && selectedProject.description.trim() !== '' && (
                      <motion.div 
                        className="p-6 sm:p-8 lg:p-10 flex-shrink-0 border-b border-border/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: 0.3,
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                      >
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: 0.5,
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                        >
                          <h5 className="font-medium text-foreground text-sm lg:text-base mb-3 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            Description
                          </h5>
                          <p className="text-muted-foreground leading-relaxed text-sm lg:text-base pl-4 border-l-2 border-blue-500/20">
                            {selectedProject.description}
                          </p>
                        </motion.div>
                      </motion.div>
                    )}

                    {/* Solution - Scrollable */}
                    {selectedProject.solution && selectedProject.solution.trim() !== '' && (
                      <motion.div 
                        className="p-6 sm:p-8 lg:p-10 flex-1 min-h-0 overflow-y-auto pr-2 colorful-scrollbar"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: 0.4,
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                      >
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: 0.6,
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                        >
                          <h5 className="font-medium text-foreground text-sm lg:text-base mb-3 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            Solution
                          </h5>
                          <div className="space-y-3">
                            {selectedProject.solution.split('\n').filter(line => line.trim() !== '').map((line, index) => {
                              const borderColors = [
                                'border-purple-500',
                                'border-blue-500',
                                'border-green-500',
                                'border-orange-500',
                                'border-pink-500',
                                'border-cyan-500'
                              ];
                              const bgColors = [
                                'bg-purple-500/10',
                                'bg-blue-500/10',
                                'bg-green-500/10',
                                'bg-orange-500/10',
                                'bg-pink-500/10',
                                'bg-cyan-500/10'
                              ];
                              const borderColor = borderColors[index % borderColors.length];
                              const bgColor = bgColors[index % bgColors.length];
                              return (
                                <motion.div
                                  key={index}
                                  className={`pl-4 border-l-4 ${borderColor} ${bgColor} py-2 rounded-r`}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ 
                                    delay: 0.7 + index * 0.1,
                                    duration: 0.4,
                                    ease: [0.22, 1, 0.36, 1]
                                  }}
                                >
                                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                                    {line.trim()}
                                  </p>
                                </motion.div>
                              );
                            })}
                          </div>
                        </motion.div>
                      </motion.div>
                    )}

                    {/* Technologies - Fixed */}
                    {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                      <motion.div 
                        className="p-6 sm:p-8 lg:p-10 flex-shrink-0 border-t border-border/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: 0.5,
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                      >
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: 0.8,
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                        >
                          <h4 className="font-semibold text-foreground text-base lg:text-lg mb-4 flex items-center gap-2">
                            <motion.span 
                              className="w-2 h-2 bg-gradient-to-r from-primary to-purple-500 rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ 
                                delay: 0.9,
                                duration: 0.4,
                                ease: [0.22, 1, 0.36, 1]
                              }}
                            />
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.technologies.map((t, i) => (
                              <motion.span 
                                key={i} 
                                className="inline-flex items-center rounded-full border border-border/50 px-3 py-1.5 text-xs lg:text-sm font-medium text-muted-foreground bg-gradient-to-r from-muted/30 to-muted/50 hover:from-primary/10 hover:to-purple-500/10 transition-all duration-400"
                                initial={{ opacity: 0, scale: 0.7, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ 
                                  delay: 1.0 + i * 0.04,
                                  duration: 0.4,
                                  ease: [0.22, 1, 0.36, 1]
                                }}
                                whileHover={{ 
                                  scale: 1.08,
                                  y: -2,
                                  transition: { duration: 0.2 }
                                }}
                              >
                                {t}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;