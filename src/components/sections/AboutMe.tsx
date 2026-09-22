'use client';
import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 border-t border-white/5 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-zinc-800 bg-zinc-900 shadow-2xl flex items-center justify-center">
              <img 
                src="/images/profile-picture.jpg" 
                alt="Emmanuel Sunday" 
                className="absolute inset-0 w-full h-full object-cover object-top scale-[1.35] origin-top" 
              />
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Marketer Behind the Metrics</h2>
              <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
              <p>
                I’m a growth marketer with 11 years of experience across paid acquisition, SEO, automation, analytics, and customer psychology.
              </p>
              <p>
                I combine strategic thinking with hands-on execution: building campaigns, systems, and customer journeys that are designed to produce measurable business results. My background in Philosophy taught me to challenge assumptions, think critically, and let evidence guide decisions.
              </p>
              <p className="text-white font-medium border-l-4 border-blue-500 pl-4 py-1">
                I like solving complex marketing problems and turning them into simple, scalable growth systems.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
