import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const OWNER_EMAIL = 'usmandioo@yahoo.com';

const socialLinks = [
  {
    Icon: FiGithub,
    href: 'https://github.com/Usytech01',
    label: 'GitHub',
  },
  {
    Icon: FaWhatsapp,
    href: 'https://wa.me/2347068519577',
    label: 'WhatsApp',
  },
  {
    Icon: FiLinkedin,
    href: 'https://www.linkedin.com/in/usman-o-dio-110706234/',
    label: 'LinkedIn',
  },
];

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoUrl = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32" />

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left — contact info */}
            <div>
              <p className="text-blue-600 dark:text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Contact Me</p>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                Let's Build Something <span className="text-gradient">Amazing</span> Together
              </h2>
              <p className="text-slate-700 dark:text-slate-300 text-lg mb-10 leading-relaxed">
                Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new
                projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-6 mb-10">
                {/* Email */}
                <a
                  href={`mailto:${OWNER_EMAIL}`}
                  className="flex items-center gap-4 text-slate-600 dark:text-gray-300 group"
                >
                  <div className="w-12 h-12 bg-blue-500/5 dark:bg-white/5 rounded-2xl flex items-center justify-center text-xl text-blue-600 dark:text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <FiMail />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-gray-500 uppercase font-bold tracking-widest">Email</p>
                    <p className="text-lg font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {OWNER_EMAIL}
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+2347068519577"
                  className="flex items-center gap-4 text-slate-600 dark:text-gray-300 group"
                >
                  <div className="w-12 h-12 bg-blue-500/5 dark:bg-white/5 rounded-2xl flex items-center justify-center text-xl text-blue-600 dark:text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-gray-500 uppercase font-bold tracking-widest">Phone / WhatsApp</p>
                    <p className="text-lg font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      +234 706 851 9577
                    </p>
                  </div>
                </a>
              </div>

              {/* Social icons */}
              <div className="flex gap-4">
                {socialLinks.map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 1)' }}
                    className="w-12 h-12 bg-slate-100 dark:bg-white/5 rounded-xl flex items-center justify-center text-xl text-slate-700 dark:text-white transition-colors"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right — contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-white/5 p-8 rounded-3xl border border-slate-200/80 dark:border-white/5 backdrop-blur-sm shadow-xl dark:shadow-none"
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-foreground placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-foreground placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-foreground placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-foreground placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-3 font-bold py-4 rounded-xl transition-all duration-300 shadow-lg ${
                    submitted
                      ? 'bg-green-500 shadow-green-500/20 text-white'
                      : 'bg-blue-500 hover:bg-blue-600 shadow-blue-500/20 text-white'
                  }`}
                >
                  {submitted ? (
                    'Message Sent! ✓'
                  ) : (
                    <>
                      <FiSend className="text-lg" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
