import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function WallsDetailedStudy() {
  return (
    <main className="min-h-screen bg-background py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
        
        <div className="mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6">Real Estate Marketing</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Walls Property: Hyper-Local Tenant Acquisition</h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            A comprehensive breakdown of how I transformed a traditional property management marketing approach into a data-driven leasing machine that achieved 94.5% portfolio occupancy in highly competitive Seattle neighborhoods.
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-white text-2xl font-bold mt-12 mb-6 border-b border-white/10 pb-4">The Starting Point</h2>
          <p className="text-zinc-300">
            Walls Property Management oversees a large portfolio of multifamily apartment buildings across Seattle (Ballard, Fremont, Capitol Hill). When I took over the digital strategy, the portfolio was experiencing higher-than-average vacancy rates during the off-peak leasing season. Their marketing relied heavily on organic listings with poor follow-up processes.
          </p>

          <h2 className="text-white text-2xl font-bold mt-12 mb-6 border-b border-white/10 pb-4">Step-by-Step Execution</h2>
          
          <h3 className="text-white text-xl font-bold mt-8 mb-4">Step 1: Hyper-Local Ad Campaigns (Meta & Google)</h3>
          <p className="text-zinc-300">
            I completely restructured the ad accounts. Instead of advertising the company as a whole, I ran highly specific property-level campaigns.
          </p>
          <ul className="list-disc pl-6 text-zinc-300 space-y-2 my-4">
            <li><strong>Meta Carousel Ads:</strong> Used professional interior photography to highlight lifestyle amenities (quartz counters, rooftop decks). I deployed geo-fenced targeting (5-mile radius around specific properties) to reach local renters.</li>
            <li><strong>Google Search Ads:</strong> Captured high-intent search traffic targeting long-tail keywords (e.g., "pet-friendly 1 bedroom apartment in Ballard").</li>
          </ul>

          <h3 className="text-white text-xl font-bold mt-8 mb-4">Step 2: Automating the Leasing Workflow (Zapier & GoHighLevel)</h3>
          <p className="text-zinc-300">
            Generating leads was only half the battle. We were losing prospects because the leasing team couldn't reply fast enough. I implemented a robust omnichannel sequence using <strong>Zapier</strong> and <strong>GoHighLevel</strong>.
          </p>
          <p className="text-zinc-300">
            When a prospective tenant submitted a request via a <strong>Zillow</strong> listing or a Meta ad, Zapier instantly intercepted the webhook and created a contact in GoHighLevel. Within 60 seconds, the lead received a customized welcome SMS and an email featuring a virtual video tour of the unit, completely replacing our old, slow Mailchimp setup.
          </p>

          <h3 className="text-white text-xl font-bold mt-8 mb-4">Step 3: Centralizing Data in Looker Studio</h3>
          <p className="text-zinc-300">
            Property owners demand transparency. I built a comprehensive <strong>Looker Studio</strong> dashboard that connected directly to Google Analytics 4 (GA4) and our property management software. 
          </p>
          <p className="text-zinc-300">
            This allowed us to map the entire funnel: Ad Spend → Website Clicks → Tour Requests → Applications Submitted → Leases Signed. We could instantly see which marketing channel was responsible for filling which building.
          </p>

          <h2 className="text-white text-2xl font-bold mt-12 mb-6 border-b border-white/10 pb-4">The Final Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="p-6 bg-zinc-900 rounded-xl border border-white/5 text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">94.5%</div>
              <div className="text-sm text-zinc-400">Total Portfolio Occupancy</div>
            </div>
            <div className="p-6 bg-zinc-900 rounded-xl border border-white/5 text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">-22</div>
              <div className="text-sm text-zinc-400">Days on Market (Average)</div>
            </div>
            <div className="p-6 bg-zinc-900 rounded-xl border border-white/5 text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">68%</div>
              <div className="text-sm text-zinc-400">Increase in Tour Requests</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
