'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function MiraiCaseStudy() {
  return (
    <section id="work" className="py-24 px-4 md:px-8 border-t border-white/5 bg-black/10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <span className="text-blue-400 font-mono text-sm tracking-wider uppercase">Case Study 01</span>
              <div className="h-px bg-white/10 flex-1" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Scaling B2B Enterprise Pipeline for Mirai Labs
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-zinc-400 max-w-3xl"
            >
              How I architected an Account-Based Marketing (ABM) engine and automated lead scoring system that decreased CPA by 28% and boosted Sales Qualified Leads (SQLs) by 42%.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              href="/case-studies/mirai" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-500/20 whitespace-nowrap"
            >
              <span>Read Full Case Study</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* CAR Framework metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <h4 className="text-zinc-500 mb-2 uppercase text-xs font-semibold tracking-wider">The Challenge</h4>
            <p className="text-zinc-300">High Cost-Per-Acquisition (CPA) and low lead quality from generic broad-targeting B2B campaigns.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <h4 className="text-zinc-500 mb-2 uppercase text-xs font-semibold tracking-wider">The Action</h4>
            <p className="text-zinc-300">Implemented targeted LinkedIn ABM campaigns paired with a robust HubSpot lead-scoring automation workflow.</p>
          </div>
          <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
            <h4 className="text-blue-400 mb-2 uppercase text-xs font-semibold tracking-wider">The Result</h4>
            <p className="text-white text-3xl font-bold mb-1">-28% <span className="text-lg text-zinc-400 font-normal">CPA</span></p>
            <p className="text-white text-3xl font-bold">+42% <span className="text-lg text-zinc-400 font-normal">SQLs in 6 mos</span></p>
          </div>
        </div>

        {/* Authentic Evidence Gallery */}
        <div className="space-y-24">
          
          {/* Feature 1: CRM Pipeline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent mix-blend-overlay" />
              <img src="/images/mirai_hubspot_crm_mosaic.jpg" alt="HubSpot CRM Pipeline" className="w-full h-auto object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">High-Velocity B2B Sales Pipeline (HubSpot)</h3>
              <p className="text-zinc-400 mb-4 leading-relaxed">
                To capture the influx of enterprise leads, I engineered a highly structured HubSpot Sales pipeline tailored specifically for Mirai Labs. Instead of a messy spreadsheet, we established a single source of truth that tracked every stage of the buyer's journey—from initial Discovery to Proof of Concept and Closed Won.
              </p>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                This rigorous data hygiene allowed us to accurately forecast revenue, actively managing a live pipeline value of precisely <strong>$450K</strong>. Individual enterprise contracts ranging from <strong>$15,000 to $45,000</strong> were tracked with perfect visibility. <em>(Note: In the adjoining screenshot, all specific client logos, contact names, and proprietary company data have been strictly redacted via mosaic blur to protect client confidentiality).</em>
              </p>
              <ul className="space-y-3">
                {['Custom deal properties for AI engineering services', 'Automated stage progression and decay triggers', 'Strict data hygiene protocols for executive forecasting'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Feature 2: Automation & Nurture */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl lg:order-2"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent mix-blend-overlay pointer-events-none" />
              <img src="/images/advanced_ai_workflow.jpg" alt="Advanced AI Workflow Routing" className="w-full h-auto object-cover block" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-1"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Advanced AI Workflow Routing & LLM Enrichment</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                Not every lead is ready to buy enterprise AI services immediately. I designed a highly complex AI-driven logic workflow to intercept incoming B2B leads. Instead of standard routing, the system uses LLMs to extract intent, enrich firmographic data, and assign predictive lead scores.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                High-intent leads are instantly routed via Slack to sales reps with full MRR potential attached, while lower-intent leads are dynamically dropped into a personalized CRM nurture sequence.
              </p>
            </motion.div>
          </div>

          {/* Feature 3: LinkedIn Campaign Manager + Power BI */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <img src="/images/mirai_linkedin_campaign_mosaic.jpg" alt="LinkedIn Campaign Manager" className="w-full h-auto object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">LinkedIn ABM — Campaign Manager</h3>
              <p className="text-zinc-400 mb-4 leading-relaxed">
                I deployed a tightly scoped Account-Based Marketing campaign exclusively on LinkedIn, targeting a custom audience of 500 CTOs, VPs of Engineering, and technical decision-makers at mid-market SaaS and cloud-infrastructure companies.
              </p>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                By eliminating broad targeting and focusing purely on intent-matched personas, the campaign delivered a <strong>1.95% CTR</strong> — more than 3x the LinkedIn B2B benchmark of 0.6% — at a <strong>Cost per Conversion of $42.80</strong>. Every dollar was tracked directly back to pipeline MRR.
              </p>
              <ul className="space-y-3">
                {['84.2K targeted impressions from a hand-curated ABM list', '1,640 high-intent clicks at a 1.95% CTR', '$42.80 Cost per Conversion — all tracked to pipeline'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Power BI + LinkedIn Ad Creative side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="/images/mirai_power_bi_mosaic.jpg" alt="Power BI Dashboard" className="w-full h-auto object-cover" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="/images/mirai_linkedin_ad_mosaic.jpg" alt="LinkedIn ABM Ad Creative" className="w-full h-auto object-cover" />
              </div>
            </motion.div>
          </div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-zinc-400 leading-relaxed">
              Every campaign result was piped into a custom Power BI dashboard for real-time executive reporting. The ad creative (right) was precision-engineered for the CTO persona — high-contrast, zero fluff, with a value proposition that spoke directly to engineering leadership.
            </p>
          </div>

          {/* Feature 4: SEO Growth (SEMrush) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent mix-blend-overlay" />
              <img src="/images/mirai_semrush_mosaic.jpg" alt="SEMrush Enterprise AI Organic Growth" className="w-full h-auto object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise SEO Domination</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                While paid ads generated immediate pipeline, I simultaneously built a long-term organic growth engine. Using SEMrush, I identified high-intent, low-difficulty keywords around "enterprise AI" and "cloud infrastructure." 
              </p>
              <p className="text-zinc-400 leading-relaxed">
                By producing authoritative, highly-technical content tailored for engineering leaders, organic traffic skyrocketed by <strong>+215% (reaching 42.5K visits)</strong>, establishing Mirai Labs as a thought leader in the space and dramatically lowering blended CPA.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
