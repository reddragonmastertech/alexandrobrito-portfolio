import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { ReactTyped } from 'react-typed';
import { profile } from '../data/profile';
import { motion } from 'framer-motion';

const About = () => {
  const socialLinks = [
    { icon: <FaEnvelope />, label: 'Email', href: `mailto:${profile.social.email}` },
    { icon: <FaWhatsapp />, label: 'WhatsApp', href: `https://wa.me/${profile.social.whatsapp.replace(/[^0-9]/g, '')}` },
    { icon: <FaLinkedin />, label: 'LinkedIn', href: profile.social.linkedin },
    { icon: <FaGithub />, label: 'GitHub', href: profile.social.github },
  ].filter((link) => link.href);

  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute -top-24 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-violet-500/20 via-blue-500/20 to-cyan-400/20 blur-[150px]"
          animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 sm:w-[32rem] h-80 sm:h-[32rem] bg-gradient-to-tr from-pink-500/20 via-rose-400/20 to-orange-400/20 blur-[160px]"
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
          {/* Left - narrative */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl border border-white/5 bg-gradient-to-br from-background/60 via-background/80 to-background/60 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_25px_80px_rgba(15,23,42,0.25)]"
          >
            <div className="mt-6 space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-foreground">
                Alexandro Brito
              </h1>
              <div className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-primary via-purple-500 to-indigo-500 bg-clip-text">
            <ReactTyped
              strings={profile.titles}
                  typeSpeed={55}
                  backSpeed={35}
              backDelay={2000}
              loop
                />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {profile.bio.map((paragraph, idx) => (
                <motion.div
                  key={paragraph}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-background/40 via-background/70 to-background/40 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.2)]"
                  initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                >
                  <motion.div 
                    className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary via-purple-500 to-indigo-500 text-white shadow-lg"
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-lg font-bold">●</span>
                  </motion.div>
                  <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                </motion.div>
          ))}
            </div>

        </motion.div>

          {/* Right - portrait & badges */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-primary/40 via-purple-500/40 to-indigo-500/40 blur-xl opacity-70 animate-pulse" />
            <div className="relative rounded-[28px] border border-white/10 bg-card/70 backdrop-blur-2xl p-6 shadow-2xl h-full flex flex-col gap-8 items-center justify-center">
              <div className="relative w-full flex justify-center items-center">
                <div className="relative w-full max-w-sm aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(15,23,42,0.35)]">
              <motion.img
                src={profile.image}
                alt={profile.name}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.05 }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
              />
            </div>
          </div>

              {/* Contact icons under photo */}
          <motion.div
                className="flex flex-wrap justify-center gap-4 text-xl"
                initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {socialLinks.map((link, idx) => (
            <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href?.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
                    aria-label={link.label}
                    className="p-3 rounded-2xl border border-white/10 bg-white/5 text-foreground hover:border-white/40 hover:bg-white/15 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: idx % 2 === 0 ? 4 : -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
            </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
