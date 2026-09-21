'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Target, Layout, MousePointerClick, ArrowRight } from 'lucide-react';

const landingPages = [
  {
    company: "Mirai Labs",
    title: "Product Engineering Studio (Main Hub)",
    url: "https://mirailabs.io/",
    target: "CTOs, Founders & VPs of Engineering",
    icon: Layout,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    rationale: "Mirai Labs is an elite product engineering studio that builds AI-native products and complex software. I structured this homepage not as a standard marketing site, but as a technical portfolio. The architecture leads with immediate proof of execution, highlighting capabilities in AI Systems, Mobile Experiences, and Cloud Infrastructure, rather than fluffy jargon. By immediately presenting deeply technical content to qualify leads, we removed friction for technical decision-makers."
  },
  {
    company: "Walls Property",
    title: "Property Management Hub (B2C)",
    url: "https://wallspropertymanagement.com/",
    target: "Seattle Renters & Prospective Tenants",
    icon: Layout,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    rationale: "This serves as the central omnichannel hub for our tenant acquisition engine. Instead of a static brochure, it was architected as a high-velocity conversion funnel. The site prioritizes property discovery with geo-fenced dynamic parameters. It serves as the primary endpoint for our Top-of-Funnel (TOFU) Meta and Google Ads, capturing visitor data via GA4 and instantly routing inquiries into our 60-second GoHighLevel SMS automation flow."
  },
  {
    company: "Walls Property",
    title: "Owner Acquisition Pipeline (B2B Paid Search)",
    url: "https://wallspropertymanagement.com/owners?gad_source=1&gad_campaignid=23882986064",
    target: "Property Owners & Investors",
    icon: MousePointerClick,
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
    rationale: "This is a dedicated, high-intent landing page built specifically for our Bottom-of-Funnel Google Ads campaigns targeting landlords. I mapped the URL parameters (gad_source, gclid) directly into our CRM for perfect closed-loop attribution. The page is designed to overcome owner objections immediately, focusing on maximizing NOI, using a sticky lead-capture form that integrates with Zapier to alert our B2B sales team instantly."
  }
];

export default function LandingPagesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-4">Conversion Architecture</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Landing Pages & Funnels</h2>
          <p className="text-zinc-400 max-w-2xl text-lg">
            I don't just drive traffic; I build the environments that capture it. Here is the strategic rationale behind the live pages and funnels I architected.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {landingPages.map((page, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 300 }}
              className={`p-8 rounded-2xl bg-zinc-900/40 border ${page.border} backdrop-blur-md flex flex-col h-full hover:bg-zinc-900/80 transition-colors shadow-2xl`}
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
                <div className="flex flex-col gap-2 mb-2">
                  <span className="text-zinc-500 text-sm">Live URL:</span>
                  <a 
                    href={page.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-1.5 rounded bg-black/40 border border-white/5 font-mono text-xs ${page.color} flex items-center gap-2 w-fit hover:bg-white/5 transition-colors group`}
                  >
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                    <span className="truncate max-w-[280px] sm:max-w-xs">{page.url}</span>
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
