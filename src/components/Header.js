import React, { useState, useCallback } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ModeToggle } from './theme/mode-toggle';
import { cn } from '../lib/utils';
import { profile } from '../data/profile';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setActiveSection(sectionId);
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setMenuOpen(false);
    }
  }, []);

  return (
    <header className={cn('sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60')}>
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          <button
            className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
            onClick={() => scrollToSection('about')}
          >
            {profile.name}
          </button>
          <ul className="hidden md:flex items-center gap-6 text-sm relative">
            
            <li>
              <a 
                className={`hover:text-primary transition-all duration-300 px-4 py-2 rounded-lg relative ${
                  activeSection === 'about' 
                    ? 'text-primary bg-primary/10 border border-primary/30 shadow-lg shadow-primary/20' 
                    : 'hover:bg-accent/50'
                }`}
                href="#about" 
                onClick={() => scrollToSection('about')}
                data-section="about"
                style={{
                  boxShadow: activeSection === 'about' 
                    ? '0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2), inset 0 0 20px rgba(139, 92, 246, 0.1)' 
                    : 'none'
                }}
              >
                About
              </a>
            </li>
            <li>
              <a 
                className={`hover:text-primary transition-all duration-300 px-4 py-2 rounded-lg relative ${
                  activeSection === 'experience' 
                    ? 'text-primary bg-primary/10 border border-primary/30 shadow-lg shadow-primary/20' 
                    : 'hover:bg-accent/50'
                }`}
                href="#experience" 
                onClick={() => scrollToSection('experience')}
                data-section="experience"
                style={{
                  boxShadow: activeSection === 'experience' 
                    ? '0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2), inset 0 0 20px rgba(139, 92, 246, 0.1)' 
                    : 'none'
                }}
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                className={`hover:text-primary transition-all duration-300 px-4 py-2 rounded-lg relative ${
                  activeSection === 'projects' 
                    ? 'text-primary bg-primary/10 border border-primary/30 shadow-lg shadow-primary/20' 
                    : 'hover:bg-accent/50'
                }`}
                href="#projects" 
                onClick={() => scrollToSection('projects')}
                data-section="projects"
                style={{
                  boxShadow: activeSection === 'projects' 
                    ? '0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2), inset 0 0 20px rgba(139, 92, 246, 0.1)' 
                    : 'none'
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                className={`hover:text-primary transition-all duration-300 px-4 py-2 rounded-lg relative ${
                  activeSection === 'skills' 
                    ? 'text-primary bg-primary/10 border border-primary/30 shadow-lg shadow-primary/20' 
                    : 'hover:bg-accent/50'
                }`}
                href="#skills" 
                onClick={() => scrollToSection('skills')}
                data-section="skills"
                style={{
                  boxShadow: activeSection === 'skills' 
                    ? '0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2), inset 0 0 20px rgba(139, 92, 246, 0.1)' 
                    : 'none'
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                className={`hover:text-primary transition-all duration-300 px-4 py-2 rounded-lg relative ${
                  activeSection === 'education' 
                    ? 'text-primary bg-primary/10 border border-primary/30 shadow-lg shadow-primary/20' 
                    : 'hover:bg-accent/50'
                }`}
                href="#education" 
                onClick={() => scrollToSection('education')}
                data-section="education"
                style={{
                  boxShadow: activeSection === 'education' 
                    ? '0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2), inset 0 0 20px rgba(139, 92, 246, 0.1)' 
                    : 'none'
                }}
              >
                Education
              </a>
            </li>
            {/* <li>
              <a 
                className={`hover:text-primary transition-all duration-300 px-4 py-2 rounded-lg relative ${
                  activeSection === 'certifications' 
                    ? 'text-primary bg-primary/10 border border-primary/30 shadow-lg shadow-primary/20' 
                    : 'hover:bg-accent/50'
                }`}
                href="#certifications" 
                onClick={() => scrollToSection('certifications')}
                data-section="certifications"
                style={{
                  boxShadow: activeSection === 'certifications' 
                    ? '0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2), inset 0 0 20px rgba(139, 92, 246, 0.1)' 
                    : 'none'
                }}
              >
                Certifications
              </a>
            </li> */}
            <li>
              <a 
                className={`hover:text-primary transition-all duration-300 px-4 py-2 rounded-lg relative ${
                  activeSection === 'contact' 
                    ? 'text-primary bg-primary/10 border border-primary/30 shadow-lg shadow-primary/20' 
                    : 'hover:bg-accent/50'
                }`}
                href="#contact" 
                onClick={() => scrollToSection('contact')}
                data-section="contact"
                style={{
                  boxShadow: activeSection === 'contact' 
                    ? '0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2), inset 0 0 20px rgba(139, 92, 246, 0.1)' 
                    : 'none'
                }}
              >
                Contact
              </a>
            </li>
            <li>
              <a 
                href="/Vasyl-Kravtsiv.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center rounded-md border border-border px-3 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Resume
              </a>
            </li>
            <li><ModeToggle /></li>
          </ul>
          <div className="md:hidden flex items-center gap-2">
            <ModeToggle />
            <button className="text-xl" onClick={toggleMenu} aria-label="Toggle menu">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4">
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a 
                  className={`block hover:text-primary px-3 py-2 rounded-md transition-colors ${activeSection === 'about' ? 'text-primary bg-primary/10' : ''}`}
                  href="#about" 
                  onClick={() => scrollToSection('about')}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  className={`block hover:text-primary px-3 py-2 rounded-md transition-colors ${activeSection === 'experience' ? 'text-primary bg-primary/10' : ''}`}
                  href="#experience" 
                  onClick={() => scrollToSection('experience')}
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  className={`block hover:text-primary px-3 py-2 rounded-md transition-colors ${activeSection === 'projects' ? 'text-primary bg-primary/10' : ''}`}
                  href="#projects" 
                  onClick={() => scrollToSection('projects')}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  className={`block hover:text-primary px-3 py-2 rounded-md transition-colors ${activeSection === 'skills' ? 'text-primary bg-primary/10' : ''}`}
                  href="#skills" 
                  onClick={() => scrollToSection('skills')}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  className={`block hover:text-primary px-3 py-2 rounded-md transition-colors ${activeSection === 'education' ? 'text-primary bg-primary/10' : ''}`}
                  href="#education" 
                  onClick={() => scrollToSection('education')}
                >
                  Education
                </a>
              </li>
              {/* <li>
                <a 
                  className={`block hover:text-primary px-3 py-2 rounded-md transition-colors ${activeSection === 'certifications' ? 'text-primary bg-primary/10' : ''}`}
                  href="#certifications" 
                  onClick={() => scrollToSection('certifications')}
                >
                  Certifications
                </a>
              </li> */}
              <li>
                <a 
                  className={`block hover:text-primary px-3 py-2 rounded-md transition-colors ${activeSection === 'contact' ? 'text-primary bg-primary/10' : ''}`}
                  href="#contact" 
                  onClick={() => scrollToSection('contact')}
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="/Vasyl-Kravtsiv.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center rounded-md border border-border px-3 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

