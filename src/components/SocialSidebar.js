import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const SocialSidebar = () => {
  const socialLinks = [
    { 
      icon: <FaEnvelope />, 
      label: 'Email', 
      href: `mailto:${profile.social.email}`,
      color: 'from-red-500 via-pink-500 to-rose-500',
      hoverColor: 'hover:from-red-600 hover:via-pink-600 hover:to-rose-600',
      glowColor: 'shadow-red-500/50'
    },
    { 
      icon: <FaWhatsapp />, 
      label: 'WhatsApp', 
      href: `https://wa.me/${profile.social.whatsapp.replace(/[^0-9]/g, '')}`,
      color: 'from-green-500 via-emerald-500 to-teal-500',
      hoverColor: 'hover:from-green-600 hover:via-emerald-600 hover:to-teal-600',
      glowColor: 'shadow-green-500/50'
    },
    { 
      icon: <FaLinkedin />, 
      label: 'LinkedIn', 
      href: profile.social.linkedin.startsWith('http') ? profile.social.linkedin : `https://${profile.social.linkedin}`,
      color: 'from-blue-500 via-cyan-500 to-indigo-500',
      hoverColor: 'hover:from-blue-600 hover:via-cyan-600 hover:to-indigo-600',
      glowColor: 'shadow-blue-500/50'
    },
    { 
      icon: <FaGithub />, 
      label: 'GitHub', 
      href: profile.social.github,
      color: 'from-purple-500 via-violet-500 to-fuchsia-500',
      hoverColor: 'hover:from-purple-600 hover:via-violet-600 hover:to-fuchsia-600',
      glowColor: 'shadow-purple-500/50'
    },
  ].filter((link) => link.href);

  return (
    <motion.div
      className="fixed left-6 top-[40%] -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          target={link.href?.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          aria-label={link.label}
          className={`
            relative w-14 h-14 rounded-2xl 
            bg-gradient-to-br ${link.color} ${link.hoverColor}
            flex items-center justify-center
            text-white text-xl
            shadow-lg ${link.glowColor}
            backdrop-blur-sm
            border border-white/20
            transition-all duration-300
            group
          `}
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
          }}
          transition={{ 
            delay: index * 0.15,
            duration: 0.5,
            ease: "easeOut"
          }}
          whileHover={{ 
            scale: 1.15,
            rotate: [0, -5, 5, -5, 0],
            y: -5,
            boxShadow: `0 10px 30px rgba(0,0,0,0.3), 0 0 20px ${link.glowColor.replace('shadow-', '').replace('/50', '')}`,
          }}
          whileTap={{ 
            scale: 0.9,
            rotate: 0
          }}
        >
          {/* Animated background glow */}
          <motion.div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-100 blur-xl`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Floating particles effect */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full bg-white/60`}
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 30],
                y: [0, (Math.random() - 0.5) * 30],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Icon */}
          <motion.div
            className="relative z-10"
            whileHover={{ 
              rotate: 360,
            }}
            transition={{ 
              duration: 0.6,
              ease: "easeInOut"
            }}
          >
            {link.icon}
          </motion.div>

          {/* Tooltip */}
          <motion.div
            className="absolute left-full ml-4 px-3 py-1.5 rounded-lg bg-black/80 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none backdrop-blur-sm border border-white/10"
            initial={{ x: -10, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {link.label}
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-black/80"></div>
          </motion.div>

          {/* Ripple effect on click */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-white/50"
            initial={{ scale: 1, opacity: 0 }}
            whileTap={{
              scale: 1.5,
              opacity: [0, 0.5, 0],
            }}
            transition={{ duration: 0.4 }}
          />
        </motion.a>
      ))}

      {/* Vertical line connector */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent -z-10"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      />
    </motion.div>
  );
};

export default SocialSidebar;

