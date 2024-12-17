import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600">Let's discuss your next project</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <ContactInfo
              icon={<Mail className="w-6 h-6" />}
              title="Email"
              content="programmerpixel1@gmail.com"
              href="mailto:programmerpixel1@gmail.com"
            />
            <ContactInfo
              icon={<Phone className="w-6 h-6" />}
              title="Phone"
              content="(253) 319-4609"
              href="tel:+12533194609"
            />
            <ContactInfo
              icon={<MapPin className="w-6 h-6" />}
              title="Location"
              content="Fairfax, VA 20151"
            />
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, title, content, href }: { icon: React.ReactNode; title: string; content: string; href?: string }) {
  const ContentWrapper = href ? 'a' : 'div';
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-start space-x-4"
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <ContentWrapper href={href} className={href ? 'text-blue-600 hover:underline' : 'text-gray-600'}>
          {content}
        </ContentWrapper>
      </div>
    </motion.div>
  );
}