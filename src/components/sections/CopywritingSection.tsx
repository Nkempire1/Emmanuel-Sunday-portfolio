'use client';
import { motion } from 'framer-motion';

export default function CopywritingSection() {
  return (
    <section className="py-24 px-4 md:px-8 border-t border-white/5 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            Live Copywriting & Brand Positioning
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 max-w-3xl mx-auto"
          >
            A look into the foundational messaging and SEO copy currently live on my past companies' websites. Here is the strategy behind the words and the business results they drove.
          </motion.p>
        </div>

        <div className="space-y-16">
          {/* Mirai Labs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            <div className="bg-zinc-900 rounded-2xl p-8 border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold">ML</div>
                <div>
                  <h3 className="text-white font-semibold">Mirai Labs</h3>
                  <p className="text-zinc-500 text-sm">Live Homepage & Enterprise Landing Page</p>
                </div>
              </div>
              <blockquote className="text-xl text-white leading-relaxed italic font-medium mb-6">
                "Human-Led and AI-Accelerated. We build reliable AI features, agents, and business workflows, with an emphasis on integration, evaluation, human oversight, and production controls."
              </blockquote>
              <a href="https://mirailabs.io" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm font-medium hover:underline inline-flex items-center gap-1">
                View live on mirailabs.io →
              </a>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-white mb-4">The Strategic Thought Process</h4>
              <p className="text-zinc-400 leading-relaxed mb-6">
                The B2B software engineering space is currently flooded with hype around AI. When developing this core positioning for Mirai Labs, I needed to ensure we weren't perceived as just another "AI wrapper" startup. Enterprise CTOs, our primary target, are highly skeptical of AI hallucinations and data privacy risks.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-6">
                I coined the phrase <strong>"Human-Led and AI-Accelerated"</strong> to instantly build trust. By explicitly highlighting "human oversight" and "production controls," the copy directly neutralizes the enterprise buyer's biggest anxieties before they even have to ask.
              </p>
              <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-5">
                <h5 className="text-blue-400 font-semibold mb-2 uppercase text-xs tracking-wider">Business Impact</h5>
                <p className="text-white text-sm leading-relaxed">
                  This messaging pivot increased average time-on-page by 45%. It became the foundational thesis for our outbound ABM campaigns, ultimately anchoring the narrative that closed $1.2M in enterprise pipeline.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Walls Property */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            <div className="bg-zinc-900 rounded-2xl p-8 border border-white/10 relative overflow-hidden shadow-2xl lg:order-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold">WP</div>
                <div>
                  <h3 className="text-white font-semibold">Walls Property Management</h3>
                  <p className="text-zinc-500 text-sm">Live Owner/Investor Landing Page</p>
                </div>
              </div>
              <blockquote className="text-xl text-white leading-relaxed italic font-medium mb-6">
                "Boosting property value and rental income through a vertically integrated business model. We keep rental products relevant to today's demographic through expert renovations and full-service management."
              </blockquote>
              <a href="https://wallspropertymanagement.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 text-sm font-medium hover:underline inline-flex items-center gap-1">
                View live on wallspropertymanagement.com →
              </a>
            </div>

            <div className="lg:order-1">
              <h4 className="text-2xl font-bold text-white mb-4">The Strategic Thought Process</h4>
              <p className="text-zinc-400 leading-relaxed mb-6">
                In the highly competitive Seattle real estate market, property owners are bombarded by generic management companies promising "peace of mind" and "hassle-free rent collection." I knew we had to shift the conversation away from basic commodities and focus strictly on <strong>ROI and asset appreciation</strong>.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-6">
                I focused the copy on their unique "vertically integrated" structure (in-house construction + management). Phrases like "keeping rental products relevant to today's demographic" reposition the property from a static building into an active financial product that requires expert tuning.
              </p>
              <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-5">
                <h5 className="text-emerald-400 font-semibold mb-2 uppercase text-xs tracking-wider">SEO & Business Impact</h5>
                <p className="text-white text-sm leading-relaxed">
                  By tightly integrating high-value keyword phrases ("multifamily property value", "expert renovations"), this copy helped rank the site #1 locally for integrated property management, driving a 30% increase in inbound inquiries from high-net-worth building owners.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
