import Link from 'next/link';

export default function OmnichannelCampaign() {
  return (
    <main className="min-h-screen bg-background text-zinc-300 pb-24">
      <nav className="w-full border-b border-white/10 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
            ← Back to Portfolio
          </Link>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-6 pt-16">
        <header className="mb-16 border-b border-white/10 pb-12">
          <span className="text-emerald-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Strategic Deep Dive</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Omnichannel Real Estate Leasing</h1>
          <p className="text-xl text-zinc-400">A masterclass in transforming local property marketing through geo-fenced Paid Social, CRM automation, and data analytics to achieve 96.8% portfolio occupancy.</p>
        </header>

        <section className="mb-16 space-y-6">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3 border-b border-white/10 pb-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 text-lg">1</span> 
            The Core Business Challenge
          </h2>
          <p className="leading-relaxed text-lg">
            The Seattle apartment market is notoriously competitive, with renters often touring 5 to 7 different properties in a single weekend before making a decision. When I audited Walls Property Management's digital infrastructure, I found they were bleeding money due to an outdated marketing mix and a disastrously slow sales process.
          </p>
          <p className="leading-relaxed">
            They were relying heavily on passive, expensive aggregators like Zillow and Apartments.com, which provided zero brand differentiation. On top of that, their Google Ads strategy was bidding on highly competitive, generic terms like "Seattle Apartments," resulting in astronomical Cost Per Click (CPC) rates and low conversion. 
          </p>
          <p className="leading-relaxed">
            The most critical failure, however, was <strong>Speed-to-Lead</strong>. When a prospective renter finally submitted an inquiry on the website, it was routed to a shared email inbox. It took leasing agents an average of 14 hours to reply. In that massive window, high-intent renters had already scheduled tours with competitors, effectively rendering the marketing spend useless. Furthermore, because data lived in isolated silos, the executive team had zero visibility into which ads actually drove signed leases.
          </p>
        </section>

        <section className="mb-16 space-y-6">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3 border-b border-white/10 pb-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 text-lg">2</span> 
            End-to-End Campaign Planning & Strategy
          </h2>
          <p className="leading-relaxed">
            We needed a unified, lightning-fast lead engine that could capture renters where they spent their time (social media) and convert them instantly. The strategy required completely bypassing traditional listing dependency by executing a hyper-local paid media approach, paired with an aggressive CRM automation overhaul.
          </p>
          
          <h3 className="text-xl font-bold text-white mt-8 mb-4">Phase 1: Meta Ads & Dynamic Creative Optimization</h3>
          <p className="leading-relaxed">
            I launched a completely new Paid Social infrastructure using <strong>Meta Ads Manager</strong> (Facebook & Instagram). I abandoned the standard "boosted post" strategy and implemented Campaign Budget Optimization (CBO) across a highly structured funnel. For Top-of-Funnel (TOFU), I used geo-fencing to target users strictly within a 5-mile radius of the properties, layering on demographic interests like "Moving," "Zillow," and "Luxury Real Estate."
          </p>
          <p className="leading-relaxed">
            I leveraged Meta's Dynamic Carousel format. Instead of generic building shots, the ads featured high-resolution, wide-angle interior photography showcasing Seattle skylines. The Meta algorithm dynamically served the best-performing image (e.g., a modern kitchen vs. a master bedroom) based on the specific user's historical engagement. Copy shifted from boring feature lists to lifestyle hooks: <em>"Discover Modern Living in Queen Anne."</em>
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Phase 2: Paid Search & Google Analytics 4 (GA4)</h3>
          <p className="leading-relaxed">
            On the <strong>Google Ads</strong> side, I pivoted the budget away from generic broad match terms. I implemented a hyper-local, long-tail strategy bidding on exact match phrases like <em>"pet-friendly 2 bedroom apartment Ballard"</em> or <em>"luxury loft Queen Anne."</em> This immediately dropped our CPC and captured renters at the very bottom of the decision funnel.
          </p>
          <p className="leading-relaxed">
            Simultaneously, I configured <strong>Google Analytics 4 (GA4)</strong> to track the entire user journey. I set up custom conversion events for "Tour Requested" and "Lease Application Started," giving us real-time visibility into the exact traffic sources driving revenue. Traffic growth was explosive, scaling to 398K users (+185%) with peak daily traffic hitting 75,412 visitors.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Phase 3: Automation & The 60-Second Rule</h3>
          <p className="leading-relaxed">
            Generating 198 leads per listing was incredible, but it meant nothing if the leasing team couldn't keep up. I implemented a robust omnichannel sequence using <strong>Zapier</strong> and <strong>GoHighLevel</strong> to solve the 14-hour response time problem forever.
          </p>
          <p className="leading-relaxed">
            When a prospective tenant submitted a lead form via a Meta ad, or even directly through Zillow's API, Zapier instantly intercepted the webhook and created a contact record in GoHighLevel CRM. 
          </p>
        </section>

        <section className="mb-16 space-y-6">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3 border-b border-white/10 pb-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 text-lg">3</span> 
            Execution, Automation & Problem Solving
          </h2>
          <p className="leading-relaxed">
            Within 60 seconds of that Zapier trigger, GoHighLevel executed an automated SMS sequence: <em>"Hi [Name], thanks for checking out The Heights! I'm the automated leasing assistant. Would you like me to send over a quick video tour of the unit right now?"</em>
          </p>
          <p className="leading-relaxed">
            Because the SMS felt human and was delivered while the prospect was still holding their phone, response rates skyrocketed by 300%. If they replied "yes," the system automatically sent a YouTube link to a walk-through video, followed by a Calendly link to book an in-person tour. 
          </p>
          <p className="leading-relaxed">
            The leasing agents didn't have to lift a finger or write a single email until the prospect physically arrived at the property for the tour. For longer-term nurture, I integrated Mailchimp to handle a 30-day email sequence for leads who were "just looking" but planning a move in the future.
          </p>
          <p className="leading-relaxed">
            Finally, to give property owners the transparency they demanded, I built a comprehensive <strong>Looker Studio</strong> dashboard. By connecting GA4, Meta Ads, Google Ads, and GoHighLevel via APIs, I mapped the entire funnel: Ad Spend → Website Clicks → Tour Requests → Applications Submitted → Leases Signed. 
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3 border-b border-white/10 pb-8 mb-8">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 text-lg">4</span> 
            KPIs, Analytics & Final Results
          </h2>
          <p className="leading-relaxed mb-8">
            This omnichannel architecture fundamentally transformed how Walls Property Management operated. By relying on deterministic data, aggressive automation, and highly targeted creative, we achieved a staggering 96.8% occupancy rate across a 1,450-unit portfolio, securing $3.4M in monthly recurring revenue.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 bg-zinc-900 border border-white/10 rounded-2xl text-center shadow-xl">
              <div className="text-3xl font-bold text-white mb-2">96.8%</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">Portfolio Occupancy</div>
            </div>
            <div className="p-6 bg-zinc-900 border border-white/10 rounded-2xl text-center shadow-xl">
              <div className="text-3xl font-bold text-white mb-2">$3.4M</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">Monthly Revenue</div>
            </div>
            <div className="p-6 bg-zinc-900 border border-white/10 rounded-2xl text-center shadow-xl">
              <div className="text-3xl font-bold text-white mb-2">4.15x</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">Meta Ads ROAS</div>
            </div>
            <div className="p-6 bg-zinc-900 border border-white/10 rounded-2xl text-center shadow-xl">
              <div className="text-3xl font-bold text-white mb-2">$84.79</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">Cost Per Lead (CPA)</div>
            </div>
            <div className="p-6 bg-zinc-900 border border-white/10 rounded-2xl text-center shadow-xl">
              <div className="text-3xl font-bold text-white mb-2">398K</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">GA4 Users (+185%)</div>
            </div>
            <div className="p-6 bg-zinc-900 border border-white/10 rounded-2xl text-center shadow-xl">
              <div className="text-3xl font-bold text-white mb-2">60s</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">Speed-To-Lead Time</div>
            </div>
            <div className="p-6 bg-zinc-900 border border-white/10 rounded-2xl text-center shadow-xl">
              <div className="text-3xl font-bold text-white mb-2">198</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">Leads per Listing</div>
            </div>
            <div className="p-6 bg-zinc-900 border border-white/10 rounded-2xl text-center shadow-xl">
              <div className="text-3xl font-bold text-white mb-2">-22</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">Days on Market</div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
