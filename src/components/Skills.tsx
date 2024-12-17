import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "HTML5, CSS3, JavaScript",
      "React, Angular, Vue.js",
      "Responsive Design",
      "SASS/LESS",
      "Webpack",
      "Redux",
      "UI/UX Design"
    ]
  },
  {
    title: "Backend Development",
    skills: [
      "Node.js & Express",
      "RESTful APIs",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
      "Microservices",
      "API Gateway"
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "CI/CD",
      "Git",
      "Jira",
      "Agile"
    ]
  }
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600">Comprehensive toolkit for modern web development</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, skills, index }: any) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-gray-50 rounded-xl p-8 shadow-lg"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill: string, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-center"
          >
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
            <span className="text-gray-700">{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}