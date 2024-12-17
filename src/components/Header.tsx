import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.h1 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-gray-900"
          >
            Rawan Ali
          </motion.h1>
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <div className="flex items-center space-x-4">
            <SocialLink href="https://github.com" icon={<Github />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
            <SocialLink href="mailto:programmerpixel1@gmail.com" icon={<Mail />} />
          </div>
        </div>
      </div>
    </motion.header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1 }}
      className="text-gray-600 hover:text-gray-900 transition-colors"
    >
      {children}
    </motion.a>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, rotate: 5 }}
      className="text-gray-600 hover:text-gray-900 transition-colors"
    >
      {icon}
    </motion.a>
  );
}