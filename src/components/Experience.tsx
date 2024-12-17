import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "Tanium",
    position: "Senior Node.js Developer",
    period: "August 2023 - Present",
    description: "Leading VoIP platform development with WebRTC integration and Kubernetes deployment.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "WebRTC", "Docker", "Kubernetes"]
  },
  {
    company: "NRG Energy",
    position: "Developer",
    period: "July 2019 - August 2023",
    description: "Developed warehouse management system with inventory tracking and order fulfillment.",
    technologies: ["Angular", "NestJS", "MongoDB", "GraphQL", "Docker"]
  },
  {
    company: "Dirayaah Smart Technologies",
    position: "React.js Developer",
    period: "August 2015 - July 2019",
    description: "Built virtual classroom platform with live video lectures and interactive features.",
    technologies: ["Angular", "NestJS", "PostgreSQL", "WebRTC", "Docker"]
  }
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600">My professional journey in software development</p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ company, position, period, description, technologies, index }: any) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white rounded-xl shadow-lg p-8"
    >
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-blue-600" />
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{position}</h3>
          <p className="text-lg text-blue-600 mb-2">{company}</p>
          <p className="text-gray-600 mb-4">{period}</p>
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech: string, i: number) => (
              <span
                key={i}
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}