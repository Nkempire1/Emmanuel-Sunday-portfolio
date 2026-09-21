'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WallsCaseStudy() {
  return (
    <section className="py-24 px-4 md:px-8 bg-background border-t border-white/5">
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
              <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase">Case Study 02</span>
              <div className="h-px bg-white/10 flex-1" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Maximizing Occupancy for Walls Property Management
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-zinc-400 max-w-3xl"
            >
              Transforming tenant acquisition in competitive Seattle neighborhoods through geo-targeted digital marketing and automated leasing workflows.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              href="/case-studies/walls" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-all shadow-lg shadow-emerald-500/20 whitespace-nowrap"
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
            <p className="text-zinc-300">High vacancy rates across premium multifamily properties during off-peak leasing seasons.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <h4 className="text-zinc-500 mb-2 uppercase text-xs font-semibold tracking-wider">The Action</h4>
            <p className="text-zinc-300">Deployed localized Meta/Google Ads and built automated Mailchimp sequences for prospective tenant tour requests.</p>
          </div>
          <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
            <h4 className="text-emerald-400 mb-2 uppercase text-xs font-semibold tracking-wider">The Result</h4>
            <p className="text-white text-3xl font-bold mb-1">96.8% <span className="text-lg text-zinc-400 font-normal">Occupancy Rate</span></p>
            <p className="text-white text-3xl font-bold">$3.4M <span className="text-lg text-zinc-400 font-normal">Monthly Revenue</span></p>
          </div>
        </div>

        {/* Authentic Evidence Gallery */}
        <div className="space-y-24">
          
          {/* Feature 1: Looker Studio */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <img src="/images/walls_looker_studio_v3_1789977689590.jpg" alt="Looker Studio Real Estate Dashboard" className="w-full h-auto object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Portfolio Performance Dashboarding</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                To replace fragmented spreadsheets, I developed a centralized Looker Studio dashboard that pulled in real-time data from our property management software and ad platforms. This allowed stakeholders to view occupancy rates across the 36-property portfolio and track the exact ROI of our marketing channels.
              </p>
            </motion.div>
          </div>

          {/* Feature 2: Ads & Social */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center lg:order-2"
            >
               <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl max-w-sm">
                <img src="/images/walls_facebook_ad_v3_1789977678423.jpg" alt="Facebook Ads Carousel" className="w-full h-auto object-cover" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-1"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Hyper-Local Social Acquisition</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                I executed localized Facebook and Instagram carousel campaigns showcasing premium apartment interiors. By targeting specific demographics within a 5-mile radius of the properties and leveraging retargeting pixels, we significantly lowered the Cost-Per-Lead for tour bookings.
              </p>
            </motion.div>
          </div>

          {/* Feature 3: Web Analytics & Email */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
               <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="/images/walls_analytics_v3_1789977893606.jpg" alt="Google Analytics 4" className="w-full h-auto object-cover" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
               <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="/images/walls_automation_v3_1789977903224.jpg" alt="Mailchimp Automation" className="w-full h-auto object-cover" />
              </div>
            </motion.div>
          </div>
          <div className="text-center max-w-3xl mx-auto mb-12">
             <p className="text-zinc-400 leading-relaxed">
                Traffic growth was explosive, scaling to <strong>398K users (+185%)</strong> in GA4. This top-of-funnel volume was instantly captured and converted using automated Mailchimp email sequences, ensuring no lead fell through the cracks during high-traffic spikes.
              </p>
          </div>

          {/* Feature 4: Tech Stack Expansion (Zapier, GoHighLevel, Zillow) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-24">
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <img src="/images/walls_zillow_v3_1789977726667.jpg" alt="Zillow Property Manager Backend" className="w-full h-auto object-cover" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <img src="/images/walls_gohighlevel_v3_1789977713473.jpg" alt="GoHighLevel CRM" className="w-full h-auto object-cover" />
              </motion.div>
            </div>
            
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <img src="/images/walls_zapier_v3_1789977911811.jpg" alt="Zapier Automation" className="w-full h-auto object-cover" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <img src="/images/walls_meta_ads_mgr_v3_1789977702186.jpg" alt="Meta Ads Manager" className="w-full h-auto object-cover" />
              </motion.div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">The Omnichannel Lead Engine</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  To achieve 94.5% occupancy, I connected every single touchpoint. Leads generated organically from <strong>Zillow</strong> or paid through <strong>Meta Ads Manager</strong> were instantly captured via <strong>Zapier</strong> and pushed into our <strong>GoHighLevel CRM</strong>.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  This completely eliminated manual data entry for the leasing team. Within 60 seconds of expressing interest, prospective tenants received an automated SMS text and email sequence from GoHighLevel, prompting them to schedule an in-person tour. This speed-to-lead advantage was critical in Seattle's fast-moving market.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
