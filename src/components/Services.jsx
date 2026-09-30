import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Layout, MonitorSmartphone, Search } from 'lucide-react';

const services = [
  {
    title: 'E-commerce Solutions',
    description: 'Fully functional online stores with secure payment gateways and complete administrative control.',
    icon: <ShoppingCart size={40} className="text-[#dda15e]" />
  },
  {
    title: 'Personalized Web Design',
    description: 'Unique, modern, and beautiful designs tailored to your brand identity with focus on user experience.',
    icon: <Layout size={40} className="text-[#dda15e]" />
  },
  {
    title: 'Web Apps & Automations',
    description: 'Custom SaaS products, intelligent business automations, and scalable web applications.',
    icon: <MonitorSmartphone size={40} className="text-[#dda15e]" />
  },
  {
    title: 'SEO & Growth Strategy',
    description: 'Technical audits, site speed optimization, backlink building, and comprehensive SEO strategies.',
    icon: <Search size={40} className="text-[#dda15e]" />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#283618] dark:bg-[#0f150c] transition-colors duration-500">
      {/* Background with multiple gradient blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#606c38] blur-[120px]"></div>
        <div className="absolute top-[40%] right-[10%] w-[40%] h-[40%] rounded-full bg-[#dda15e] blur-[150px] opacity-20"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-[#3a4d23] blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#dda15e] mb-2 block font-mono">
            Capabilities
          </span>
          <h2 className="text-6xl font-bold text-[#fefae0] mb-6" style={{ fontFamily: "'Caveat', cursive" }}>
            My Services
          </h2>
          <p className="text-xl text-[#fefae0]/90 max-w-2xl mx-auto font-light">
            Providing end-to-end digital solutions from beautiful design to robust backend infrastructure and organic growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#fefae0]/10 dark:bg-[#172213] backdrop-blur-xl border border-[#fefae0]/20 dark:border-[#dda15e]/20 p-8 rounded-3xl hover:bg-[#fefae0]/20 dark:hover:bg-[#1f2d19] transition-all duration-300 transform hover:-translate-y-3 shadow-2xl"
            >
              <div className="mb-6 p-4 inline-block bg-[#fefae0]/10 rounded-2xl border border-[#fefae0]/10 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#fefae0] mb-4 tracking-tight">{service.title}</h3>
              <p className="text-[#fefae0]/80 leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
