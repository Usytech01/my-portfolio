import React from 'react'
import { services } from '../interfaces'
import { motion } from 'framer-motion';
import { FiLayout, FiSearch, FiCode, FiBriefcase } from 'react-icons/fi';

const Service: React.FC = () => {
  const icons = [<FiLayout />, <FiSearch />, <FiCode />, <FiBriefcase />];

  return(
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 dark:text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">My Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What I <span className="text-gradient">Do Best</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
            I offer a comprehensive suite of digital services to help your business grow and stand out in the digital landscape.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, backgroundColor: "var(--hover-bg)" }}
              className='bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/5 p-8 rounded-3xl transition-all duration-300 group shadow-sm dark:shadow-none [--hover-bg:rgba(241,245,249,1)] dark:[--hover-bg:rgba(30,41,59,0.8)]'
            >
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-2xl text-blue-600 dark:text-blue-500 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                {icons[index] || <FiCode />}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{service}</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                High-quality {service.toLowerCase()} solutions tailored to your specific business needs and user requirements.
              </p>
            </motion.div>

          ))}
        </div>
      </div>
    </section>
  )
}
export default Service;