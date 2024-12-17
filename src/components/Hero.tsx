import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Senior MERN Stack Developer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Building robust and scalable web applications with modern technologies.
              Specialized in full-stack development, performance optimization, and technical leadership.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
              >
                Contact Me
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#experience"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
              >
                View Work
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <SkillCard 
              icon={<Code2 className="w-8 h-8" />}
              title="Frontend Development"
              description="React, Angular, Vue.js"
            />
            <SkillCard 
              icon={<Database className="w-8 h-8" />}
              title="Backend Development"
              description="Node.js, Express, MongoDB"
            />
            <SkillCard 
              icon={<Globe className="w-8 h-8" />}
              title="Cloud Services"
              description="AWS, Docker, Kubernetes"
            />
            <SkillCard 
              icon={<Code2 className="w-8 h-8" />}
              title="Modern Tools"
              description="TypeScript, GraphQL, CI/CD"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-xl shadow-lg"
    >
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}