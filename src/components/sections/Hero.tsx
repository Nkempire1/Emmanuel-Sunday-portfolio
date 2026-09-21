'use client';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Target, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 md:px-8">
      
      {/* Spinning Orbital Design - Unique Growth Engine Concept */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-40 mix-blend-screen" style={{ perspective: '1000px' }}>
        <motion.div 
          animate={{ rotateZ: 360 }} 
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="w-full h-full border-zinc-800 rounded-full flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d', transform: 'rotateX(65deg)' }}
        >
          {/* Core */}
          <div className="absolute w-32 h-32 bg-blue-500/20 blur-xl rounded-full" />
          <div className="absolute w-16 h-16 bg-blue-400/40 blur-md rounded-full" />
          <div className="absolute w-8 h-8 bg-white/80 blur-[2px] rounded-full shadow-[0_0_30px_10px_rgba(59,130,246,0.5)]" />
          
          {/* Inner Ring */}
          <div className="absolute w-[300px] h-[300px] rounded-full border border-blue-500/30" />
          <motion.div 
            animate={{ rotate: -360 }} 
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute w-[300px] h-[300px] rounded-full"
          >
            <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_2px_rgba(52,211,153,0.8)]" />
          </motion.div>

          {/* Middle Ring */}
          <div className="absolute w-[500px] h-[500px] rounded-full border border-indigo-500/20 border-dashed" />
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[500px] h-[500px] rounded-full"
          >
            <div className="absolute top-1/2 right-[-5px] -translate-y-1/2 w-2.5 h-2.5 bg-blue-400 rounded-full shadow-[0_0_12px_3px_rgba(96,165,250,0.8)]" />
            <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-indigo-400 rounded-full shadow-[0_0_10px_2px_rgba(129,140,248,0.8)]" />
          </motion.div>

          {/* Outer Ring */}
          <div className="absolute w-[700px] h-[700px] rounded-full border border-emerald-500/10" />
          <motion.div 
            animate={{ rotate: -360 }} 
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute w-[700px] h-[700px] rounded-full"
          >
            <div className="absolute top-1/4 left-[-4px] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]" />
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto w-full pt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Emmanuel Sunday <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Growth Marketing Lead
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed"
          >
            I build scalable acquisition engines, design high-converting automation workflows, and turn data into revenue across both B2B and B2C landscapes. Featured below are selected case studies highlighting my recent work in Enterprise Tech and Real Estate.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#work" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-colors">
              View My Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 transition-colors">
              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24"
        >
          {[
            { icon: Target, title: "Acquisition Strategy", desc: "Omnichannel campaigns that drive qualified pipeline and lower CAC." },
            { icon: Zap, title: "Marketing Automation", desc: "Complex CRM workflows (HubSpot, GoHighLevel, Mailchimp) for lead nurturing." },
            { icon: BarChart3, title: "Data & Analytics", desc: "Full-funnel tracking and dashboarding (Looker Studio, Power BI, GA4)." }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm flex flex-col gap-4 hover:border-white/10 transition-colors cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
