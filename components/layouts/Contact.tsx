import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <p className="text-blue-600 dark:text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Contact Me</p>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                Let's Build Something <span className="text-gradient">Amazing</span> Together
              </h2>
              <p className="text-slate-700 dark:text-slate-300 text-lg mb-10 leading-relaxed">
                Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>


              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 text-slate-600 dark:text-gray-300">
                  <div className="w-12 h-12 bg-blue-500/5 dark:bg-white/5 rounded-2xl flex items-center justify-center text-xl text-blue-600 dark:text-blue-500">
                    <FiMail />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-gray-500 uppercase font-bold tracking-widest">Email</p>
                    <p className="text-lg font-semibold text-foreground">usman@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-slate-600 dark:text-gray-300">
                  <div className="w-12 h-12 bg-blue-500/5 dark:bg-white/5 rounded-2xl flex items-center justify-center text-xl text-blue-600 dark:text-blue-500">
                    <FiPhone />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-gray-500 uppercase font-bold tracking-widest">Phone</p>
                    <p className="text-lg font-semibold text-foreground">+234 123 456 7890</p>
                  </div>
                </div>

              </div>

              <div className="flex gap-4">
                {[FiGithub, FaWhatsapp, FiLinkedin].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 1)" }}
                    className="w-12 h-12 bg-slate-100 dark:bg-white/5 rounded-xl flex items-center justify-center text-xl text-slate-700 dark:text-white transition-colors"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>

            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/50 dark:bg-white/5 p-8 rounded-3xl border border-slate-200 dark:border-white/5 backdrop-blur-sm"
            >

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Name</label>
                    <input type="text" className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-foreground focus:border-blue-500 focus:outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email</label>
                    <input type="email" className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-foreground focus:border-blue-500 focus:outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                  <input type="text" className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-foreground focus:border-blue-500 focus:outline-none transition-colors" placeholder="Project Inquiry" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-foreground focus:border-blue-500 focus:outline-none transition-colors" placeholder="Tell me about your project..." />
                </div>

                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
