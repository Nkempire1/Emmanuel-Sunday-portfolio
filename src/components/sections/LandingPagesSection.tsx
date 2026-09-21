'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Target, Layout, MousePointerClick, ArrowRight } from 'lucide-react';

const landingPages = [
  {
    company: "Mirai Labs",
    title: "Enterprise Cloud Migration (ABM)",
    url: "mirailabs.io/solutions/cloud-migration",
    target: "CTOs & VPs of Engineering",
    icon: Target,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    rationale: "Designed specifically for our LinkedIn ABM campaigns. I removed the global navigation to eliminate exit points and implemented a progressive profiling form via Clearbit. The page dynamically swapped headlines based on the visitor's industry (e.g., 'Fintech Cloud Migration'), which directly lifted conversion rates by 42%."
  },
  {
    company: "Mirai Labs",
    title: "LLM Security Blueprint (Gated Asset)",
    url: "mirailabs.io/resources/llm-security",
    target: "Security & IT Directors",
    icon: Layout,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    rationale: "A high-value gated asset page. To overcome the skepticism of technical buyers, I featured a 3-minute technical teardown video above the fold and included un-gated architectural diagrams. This 'give value first' psychological approach dropped our Cost Per Lead (CPL) by over $115."
  },
  {
    company: "Walls Property",
    title: "Queen Anne Lofts (Geo-Fenced)",
    url: "wallsproperty.com/queen-anne-lofts",
    target: "Seattle Renters (5-Mile Radius)",
    icon: MousePointerClick,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    rationale: "Built exclusively for our Meta Ads traffic. Instead of a generic building listing, this page was designed as a lifestyle hook. It featured an embedded 3D Matterport tour, a real-time 'Units Remaining' scarcity trigger, and a direct Zapier webhook integration for 60-second SMS tour bookings."
  },
  {
    company: "Walls Property",
    title: "Weekend Tour Special (Retargeting)",
    url: "wallsproperty.com/vip-tour",
    target: "High-Intent Bouncing Visitors",
    icon: Target,
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
    rationale: "A dedicated retargeting funnel for users who viewed a listing but didn't book. The rationale was to remove all friction: the page consisted entirely of a single, mobile-optimized Calendly embed offering a 'Skip-the-Line' weekend tour, which was instrumental in driving our 4.15x ROAS."
  }
];

export default function LandingPagesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-indigo-500/5 to-transparent -z-10" />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-4">Conversion Architecture</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Landing Pages & Funnels</h2>
          <p className="text-zinc-400 max-w-2xl text-lg">
            I don't just drive traffic; I build the environments that capture it. Here is the strategic rationale behind the high-converting landing pages I architected for my core campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {landingPages.map((page, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-2xl bg-zinc-900/50 border ${page.border} backdrop-blur-sm flex flex-col h-full hover:bg-zinc-900 transition-colors`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${page.bg} flex items-center justify-center ${page.color}`}>
                    <page.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-1">{page.company}</div>
                    <h3 className="text-xl font-bold text-white">{page.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="mb-6 pb-6 border-b border-white/5">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-zinc-500">Target Audience:</span>
                  <span className="text-zinc-300 font-medium">{page.target}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-500">URL Structure:</span>
                  <a href="#" className={`${page.color} hover:underline flex items-center gap-1`}>
                    {page.url}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex-grow">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Layout className="w-4 h-4 text-zinc-400" />
                  Strategic Rationale
                </h4>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {page.rationale}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
