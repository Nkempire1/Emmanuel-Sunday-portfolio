'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Code, PlaySquare, Target } from 'lucide-react';

const projects = [
  {
    title: "Studio North: Creative & Video Strategy",
    type: "Creative Direction",
    icon: PlaySquare,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    url: "https://nkempire1.github.io/delivery-portfolio/",
    explanation: "I wanted to prove that great marketing isn't just about spreadsheets and CPCs—it's about the narrative. I built the 'Studio North' portfolio to showcase my creative direction across different industries. Instead of just writing copy, I conceptualized five distinct video campaigns ranging from a local real estate commercial to a Web3 gaming announcement. For each, I mapped out the exact audience psychology, the platform strategy (like optimizing for sound-off Meta feeds), and the core script. It demonstrates my ability to bridge the gap between high-level brand storytelling and hard-hitting performance media."
  },
  {
    title: "North Loop Strength: Full-Funnel Campaign",
    type: "Campaign Architecture",
    icon: Target,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    url: "https://nkempire1.github.io/campaign-north-loop-strength/",
    explanation: "Most fitness marketing relies on aggressive 'before-and-after' guilt trips. I wanted to design a campaign rooted in real customer empathy. For North Loop Strength, I architected a complete, six-asset lead generation ecosystem targeting 30-something desk workers. The insight was simple: they don't quit because they're lazy, they quit because no one notices when they stop. I designed the entire brand voice, the visual system, and the conversion offer. This case study proves I can build cohesive, multi-touchpoint campaigns that actually resonate with human beings, not just algorithms."
  },
  {
    title: "Customer Churn Intelligence AI",
    type: "Machine Learning & Analytics",
    icon: Code,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    url: "https://customer-churn-intelligence-app1.streamlit.app/",
    repo: "https://github.com/Nkempire1/customer-churn-intelligence/blob/main/customer_churn_intelligence_edited.ipynb",
    explanation: "Marketing is useless if you're losing customers out the back door. I built this predictive Churn Intelligence model using Python and Machine Learning to bridge the gap between marketing and data science. Instead of relying on gut feelings, this interactive Streamlit web app ingests behavioral data to predict exactly which users are at risk of canceling. By deploying this kind of predictive modeling, I can trigger automated retention campaigns before the customer even clicks 'cancel'. It represents the ultimate defensive marketing strategy."
  }
];

export default function ExtendedPortfolio() {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 border-t border-white/5 relative bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            Extended Portfolio & Experiments
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 max-w-3xl mx-auto"
          >
            A deeper look into my multidisciplinary capabilities, spanning creative video direction, full-funnel brand architecture, and predictive machine learning.
          </motion.p>
        </div>

        <div className="flex flex-col gap-20">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Text & Rationale (Alternating sides based on index) */}
              <div className={`flex flex-col gap-6 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${project.bg} flex items-center justify-center ${project.color}`}>
                    <project.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold tracking-wider uppercase text-zinc-500">{project.type}</span>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                
                <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 relative">
                  <div className="absolute -top-3 -left-2 text-6xl text-white/5 font-serif">"</div>
                  <p className="text-zinc-300 leading-relaxed text-lg relative z-10">
                    {project.explanation}
                  </p>
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-950 font-semibold hover:bg-zinc-200 transition-colors"
                  >
                    View Live Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  {project.repo && (
                    <a 
                      href={project.repo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors"
                    >
                      View GitHub Repo
                      <Code className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Browser Mockup / Iframe Embed */}
              <div className={`w-full bg-zinc-900 rounded-xl border border-white/10 overflow-hidden shadow-2xl ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="h-10 bg-zinc-950 border-b border-white/5 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <div className="ml-4 px-3 py-1 text-[10px] text-zinc-500 bg-zinc-900 rounded-md font-mono flex-1 truncate">
                    {project.url}
                  </div>
                </div>
                <div className="relative w-full aspect-[4/3] bg-zinc-950">
                  <iframe 
                    src={project.url} 
                    className="absolute top-0 left-0 w-full h-full border-none opacity-90 hover:opacity-100 transition-opacity"
                    title={project.title}
                    loading="lazy"
                  />
                  
                  {/* Subtle gradient overlay to prevent iframe from intercepting all scrolls immediately, but allowing interaction on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
