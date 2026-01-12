import React from 'react'
import { services } from '../interfaces'
import { motion } from 'framer-motion';


const Service: React.FC = () => {
  return(
    <section className="py-24 bg-[#061427]">
      <div className="mx-4">
        <h2 className="text-4xl font-bold text-white mb-12">Design Services</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {services.map(Service => (
            <motion.div
              key={Service}
              whileHover={{y: -10}}
              className='bg-[#0B1F3D] rounded-xl p-6 shadow-lg'
            >
              <h3 className="text-white font-semibold">{Service}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Service;