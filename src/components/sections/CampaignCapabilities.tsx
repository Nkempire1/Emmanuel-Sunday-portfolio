'use client';
import { motion } from 'framer-motion';

const capabilities = [
  {
    title: "Account-Based Marketing (ABM)",
    company: "Mirai Labs",
    planning: "Identified that broad-targeting B2B tech ads resulted in unqualified startup leads. Planned a pivot to target only CTOs and VPs at enterprise companies ($50M+ revenue) using firmographic data.",
    execution: "Orchestrated LinkedIn Sponsored InMail campaigns combined with n8n automated lead enrichment (Clearbit). Triggered Slack alerts for sales only when lead score > 50.",
    achievement: "Closed $1.2M in enterprise pipeline, reduced CPA by 35%, and accelerated sales velocity to 46 days.",
    link: "/campaigns/abm"
  },
  {
    title: "Omnichannel Real Estate Leasing",
    company: "Walls Property Management",
    planning: "Recognized that high-value Seattle renters (Queen Anne, West Seattle) were abandoning traditional apartment listing sites. Planned a hyper-local paid social strategy.",
    execution: "Deployed geo-fenced Meta Carousel ads showcasing luxury interiors. Connected Zillow and Meta leads via Zapier directly into a GoHighLevel SMS auto-responder to achieve a 60-second speed-to-lead.",
    achievement: "Achieved 96.8% portfolio occupancy across 1,450 units, driving $3.4M in monthly revenue at a $84.79 CPA.",
    link: "/campaigns/omnichannel"
  },
  {
    title: "Enterprise Technical SEO",
    company: "Mirai Labs",
    planning: "Paid channels were driving immediate pipeline, but long-term blended CPA was high. Planned a shift to capture high-intent 'bottom-of-funnel' search traffic for cloud engineering.",
    execution: "Utilized SEMrush to discover high-volume, low-difficulty technical keywords. Developed authoritative engineering content and executed a technical backlink strategy.",
    achievement: "Scaled organic traffic by +812% to 853K monthly visits, securing top keyword rankings for 'enterprise AI solutions'.",
    link: "/campaigns/seo"
  }
];

export default function CampaignCapabilities() {
  return (
    <section className="py-24 px-4 md:px-8 border-t border-white/5 relative bg-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            Strategic Campaign Capabilities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 max-w-3xl mx-auto"
          >
            A high-level view of how I plan, execute, and deliver results across different industries and marketing channels.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
              className="bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl flex flex-col hover:border-white/20 hover:shadow-indigo-500/10"
            >
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-zinc-300 text-xs font-semibold tracking-wider uppercase mb-4">
                  {cap.company}
                </span>
                <h3 className="text-2xl font-bold text-white">{cap.title}</h3>
              </div>
              
              <div className="space-y-6 flex-1">
                <div>
                  <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">How I Planned It</h4>
                  <p className="text-zinc-300 leading-relaxed text-sm">{cap.planning}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">How I Executed It</h4>
                  <p className="text-zinc-300 leading-relaxed text-sm">{cap.execution}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 mb-6">
                <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">What I Achieved</h4>
                <p className="text-white font-medium leading-relaxed">{cap.achievement}</p>
              </div>

              <a 
                href={cap.link} 
                className="mt-auto inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-colors border border-white/10 hover:border-white/20"
              >
                Read Full Strategy 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
