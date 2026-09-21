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
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-zinc-800 bg-zinc-900 shadow-2xl flex items-center justify-center">
              {/* Fallback before picture is added */}
              <div className="text-zinc-700 text-center px-8">
                <svg className="w-16 h-16 mx-auto mb-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="text-sm uppercase tracking-widest font-semibold">Headshot Placeholder</p>
              </div>
              
              {/* When ready, replace the above div with this img tag: */}
              {/* <img src="/images/emmanuel_headshot.jpg" alt="Emmanuel Sunday" className="absolute inset-0 w-full h-full object-cover" /> */}
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
                I combine strategic thinking with hands-on execution—building campaigns, systems, and customer journeys that are designed to produce measurable business results. My background in Philosophy taught me to challenge assumptions, think critically, and let evidence guide decisions.
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
