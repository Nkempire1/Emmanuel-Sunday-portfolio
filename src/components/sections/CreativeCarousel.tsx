'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const creatives = [
  {
    id: 1,
    company: "Walls Property Management",
    campaign: "Seattle Luxury Apartment Leasing",
    beforeText: "Generic real estate ad. Focused only on listing features. Low quality imagery. No strong call-to-action.",
    beforeImage: "/images/walls_before_ad_mosaic.jpg",
    afterImage: "/images/walls_facebook_ad_mosaic.jpg",
    explanation: "I transitioned the creative from basic property listings to a high-end lifestyle carousel. We used wide-angle interior photography highlighting the Seattle skyline. The copy was rewritten to evoke emotion ('Discover Modern Living in Seattle') rather than just listing square footage.",
    howItWorked: "By leveraging Meta's dynamic carousel format combined with a geo-fenced radius around Seattle's tech hubs, the algorithm automatically showed the best-performing room (living room vs bedroom) to specific users based on their engagement history.",
    metrics: {
      roas: "4.15x",
      cpa: "$62.50",
      leads: "312 Qualified Tours"
    }
  },
  {
    id: 2,
    company: "Mirai Labs",
    campaign: "B2B Cloud Infrastructure ABM",
    beforeText: "Stock photo of servers. Highly technical jargon that isolated business decision-makers. No clear value proposition.",
    beforeImage: "/images/mirai_before_ad_mosaic.jpg",
    afterImage: "/images/mirai_linkedin_ad_mosaic.jpg",
    explanation: "Enterprise CTOs ignore generic stock photos. I designed a custom, high-contrast creative using neon-grid brain imagery to visually represent 'AI Engineering'. The copy was sharpened to 'Scale Smart, Build Faster', instantly communicating the business value of our technical services.",
    howItWorked: "This creative was deployed exclusively via LinkedIn Sponsored Content to a highly vetted ABM list of 500 tech executives. We bypassed the 'junk' clicks and only paid for impressions that mattered to the sales team.",
    metrics: {
      roas: "N/A (B2B Pipeline)",
      cpa: "Reduced by 28%",
      leads: "350 Total Leads (Q3)"
    }
  }
];

export default function CreativeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === creatives.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? creatives.length - 1 : prev - 1));
  };

  return (
    <section id="creatives" className="py-24 px-4 md:px-8 bg-black/20 backdrop-blur-sm border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            Creative Performance & Analysis
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 max-w-3xl mx-auto"
          >
            A breakdown of before-and-after creative transformations, detailing the psychology, execution, and exact metrics that drove campaign success.
          </motion.p>
        </div>

        <div className="relative bg-zinc-900 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2"
            >
              {/* Images Section */}
              <div className="p-8 lg:border-r border-white/10 bg-black/20 backdrop-blur-sm/50 flex flex-col justify-center">
                <div className="flex gap-4 mb-8">
                  <div className="flex-1">
                    <h4 className="text-zinc-500 text-sm font-semibold uppercase tracking-wider mb-3 text-center">Before (Generic)</h4>
                    <div className="aspect-[4/5] bg-zinc-800 rounded-xl border border-white/5 flex items-center justify-center text-center overflow-hidden grayscale-[40%] opacity-80">
                      {creatives[currentIndex].beforeImage ? (
                        <img 
                          src={creatives[currentIndex].beforeImage} 
                          alt="Generic Before Creative"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <p className="text-zinc-500 italic text-sm p-6">{creatives[currentIndex].beforeText}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3 text-center">After (My Creative)</h4>
                    <div className="aspect-[4/5] relative rounded-xl border border-blue-500/30 overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                      <img 
                        src={creatives[currentIndex].afterImage} 
                        alt="Winning Creative"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text / Metrics Section */}
              <div className="p-8 flex flex-col justify-center">
                <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-2">
                  {creatives[currentIndex].company}
                </span>
                <h3 className="text-3xl font-bold text-white mb-8">{creatives[currentIndex].campaign}</h3>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Why It Worked (The Psychology)</h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">{creatives[currentIndex].explanation}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Execution & Targeting</h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">{creatives[currentIndex].howItWorked}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">{creatives[currentIndex].metrics.roas}</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">ROAS</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">{creatives[currentIndex].metrics.cpa}</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">CPA</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">{creatives[currentIndex].metrics.leads}</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Volume</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute bottom-6 right-8 flex gap-3">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-white transition-colors"
            >
              ←
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center text-white transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
