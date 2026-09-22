import Link from 'next/link';

export default function ABMCampaign() {
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
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Strategic Deep Dive</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Account-Based Marketing (ABM) Engine</h1>
          <p className="text-xl text-zinc-400">An exhaustive breakdown of how I overhauled Mirai Labs' Go-To-Market strategy, integrating Paid Social, Search, and Automation to generate $450K in Enterprise Pipeline.</p>
        </header>

        <section className="mb-16 space-y-6">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3 border-b border-white/10 pb-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 text-lg">1</span> 
            The Core Business Challenge
          </h2>
          <p className="leading-relaxed text-lg">
            When I was brought into Mirai Labs, the marketing department was operating under a fundamental misconception: they were treating high-ticket, $100k+ B2B enterprise cloud contracts like low-friction SaaS subscriptions. The team was running broad-targeted campaigns across Google Ads and LinkedIn, optimizing for top-of-funnel (TOFU) metrics like "Cost Per Click" (CPC) and "Cost Per Lead" (CPL) rather than pipeline revenue.
          </p>
          <p className="leading-relaxed">
            The results looked great on a superficial spreadsheet with thousands of leads flowing in. However, when I audited the CRM, the reality was catastrophic. <strong>Sales was rejecting 85% of marketing-sourced leads.</strong> The leads were primarily from early-stage startups, students, or junior developers who had absolutely zero buying power or budget for enterprise-grade AI architecture. 
          </p>
          <p className="leading-relaxed">
            Furthermore, the sales and marketing teams were completely siloed. Marketing would pass a lead over the fence, and if it was actually qualified, it would sit in a sales queue for 48 hours before the first outreach. In the enterprise tech space, a 48-hour delay means you've already lost the deal to an incumbent like AWS or a faster competitor. We needed a radical shift. We needed to stop marketing to the entire internet and start marketing to a surgically precise list of 500 companies.
          </p>
        </section>

        <section className="mb-16 space-y-6">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3 border-b border-white/10 pb-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 text-lg">2</span> 
            End-to-End Campaign Planning & Strategy
          </h2>
          <p className="leading-relaxed">
            I proposed an immediate halt to all broad "lead gen" campaigns. I tore down the existing ad accounts and instituted a strict, multi-channel Account-Based Marketing (ABM) framework. This wasn't just a media buying shift; it was a complete operational overhaul spanning Data Enrichment, Paid Search, Paid Social, Web Analytics, and CRM Automation.
          </p>
          
          <h3 className="text-xl font-bold text-white mt-8 mb-4">Phase 1: Audience Identification & Enrichment</h3>
          <p className="leading-relaxed">
            The first step was defining the Total Addressable Market (TAM) for this specific campaign. Working alongside the VP of Sales, we used tools like ZoomInfo and Clearbit to extract a highly targeted list of exactly 500 accounts. The firmographic criteria were strict: companies with $50M+ in annual revenue, utilizing legacy cloud infrastructure, and actively hiring for "Machine Learning Engineers" or "Cloud Architects" (indicating intent to modernize). Within these 500 accounts, we isolated the exact decision-makers: CTOs, VPs of Engineering, and Directors of IT. This gave us a total audience pool of roughly 1,200 individuals.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Phase 2: The Paid Media Ecosystem (LinkedIn & Google Ads)</h3>
          <p className="leading-relaxed">
            With the audience defined, I built a synchronized paid media ecosystem. On <strong>LinkedIn Campaign Manager</strong>, I uploaded our target list and utilized Account Targeting. I deployed a mix of Sponsored Content (carousel ads highlighting our technical case studies) and Sponsored InMail. The creative was deliberately highly technical. We bypassed marketing jargon and spoke directly to engineers about latency, compute costs, and API scalability. This intentionally filtered out non-technical clicks.
          </p>
          <p className="leading-relaxed">
            Simultaneously, I restructured our <strong>Google Ads</strong> account. I paused all broad match keywords like "AI services" which were bleeding budget. Instead, I built highly specific exact-match Search campaigns targeting bottom-of-funnel intent: "enterprise AWS migration consultants," "custom LLM deployment architecture," and competitor conquesting campaigns. I integrated offline conversion tracking from HubSpot back into Google Ads, allowing Google's smart bidding algorithms (Target CPA) to optimize specifically for Sales Qualified Leads (SQLs) rather than raw form fills. 
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Phase 3: Conversion Rate Optimization (CRO) & GA4 Tracking</h3>
          <p className="leading-relaxed">
            Driving high-quality traffic is useless if the landing page doesn't convert. I audited our web properties using Google Analytics 4 (GA4) and Microsoft Clarity. The data revealed a 78% drop-off rate on our primary "Contact Us" form because it asked for 10 fields of information. 
          </p>
          <p className="leading-relaxed">
            I redesigned the landing pages, reducing the form to just "Work Email." I then deployed an API integration behind the scenes: when an email was entered, Clearbit would instantly append the user's company size, industry, and job title before passing it to the database. The CTA was also changed from a generic "Request Demo" to an exclusive "Book a Technical Architecture Review," which resulted in a 42% lift in landing page conversion rates.
          </p>
        </section>

        <section className="mb-16 space-y-6">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3 border-b border-white/10 pb-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 text-lg">3</span> 
            Execution, Automation & Problem Solving
          </h2>
          <p className="leading-relaxed">
            The most significant bottleneck was still the handover from Marketing to Sales. To solve this, I architected a complex, automated Revenue Operations (RevOps) pipeline utilizing <strong>n8n</strong> and <strong>HubSpot</strong>.
          </p>
          <p className="leading-relaxed">
            When a target CTO clicked our Google Ad or LinkedIn Ad, UTM parameters were tracked perfectly in GA4. If that CTO downloaded a whitepaper or attended a webinar, n8n calculated a dynamic <strong>Lead Score</strong>. For example: Opening an email was +2 points, visiting the pricing page was +10 points, and attending a technical webinar was +30 points.
          </p>
          <p className="leading-relaxed">
            I programmed a critical logic gate: Once a lead crossed the threshold of 50 points, n8n triggered a webhook directly into HubSpot. The system automatically upgraded the contact lifecycle stage to SQL. But I didn't stop there. Using n8n's Slack integration, I built an automated alert system. The moment a target account hit 50 points, a notification fired into a dedicated `#sales-hot-leads` Slack channel. The alert contained the prospect's name, LinkedIn profile, company data, and exactly what web pages they had looked at in the last 24 hours.
          </p>
          <p className="leading-relaxed">
            To ensure accountability, I established a strict Service Level Agreement (SLA): the assigned Account Executive had exactly 15 minutes to initiate outreach once that Slack alert fired. If they didn't, the lead escalated to the VP of Sales. This level of orchestration completely eliminated lead decay. 
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3 border-b border-white/10 pb-8 mb-8">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 text-lg">4</span> 
            KPIs, Analytics & Final Results
          </h2>
          <p className="leading-relaxed mb-8">
            The results of this comprehensive digital marketing overhaul were tracked meticulously in our Power BI dashboards. By aligning Paid Social, Search, CRO, and CRM Automation, we achieved strong growth in the B2B sector. We generated $450K in total enterprise pipeline from the LinkedIn ABM channel and drastically improved our unit economics.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-8 bg-zinc-900 border border-white/10 rounded-2xl text-center shadow-xl">
              <div className="text-4xl font-bold text-white mb-2">$450K</div>
              <div className="text-sm text-zinc-400 uppercase tracking-wider">Enterprise Pipeline Generated</div>
            </div>
            <div className="p-8 bg-zinc-900 border border-white/10 rounded-2xl text-center shadow-xl">
              <div className="text-4xl font-bold text-white mb-2">-28%</div>
              <div className="text-sm text-zinc-400 uppercase tracking-wider">Cost Per Acquisition (CPA)</div>
            </div>
            <div className="p-8 bg-zinc-900 border border-white/10 rounded-2xl text-center shadow-xl">
              <div className="text-4xl font-bold text-white mb-2">46 Days</div>
              <div className="text-sm text-zinc-400 uppercase tracking-wider">Sales Cycle Velocity</div>
            </div>
            <div className="p-8 bg-zinc-900 border border-white/10 rounded-2xl text-center shadow-xl">
              <div className="text-4xl font-bold text-white mb-2">350</div>
              <div className="text-sm text-zinc-400 uppercase tracking-wider">Targeted Core Leads</div>
            </div>
            <div className="p-8 bg-zinc-900 border border-white/10 rounded-2xl text-center shadow-xl">
              <div className="text-4xl font-bold text-white mb-2">+38%</div>
              <div className="text-sm text-zinc-400 uppercase tracking-wider">YoY Revenue Growth</div>
            </div>
            <div className="p-8 bg-zinc-900 border border-white/10 rounded-2xl text-center shadow-xl">
              <div className="text-4xl font-bold text-white mb-2">42%</div>
              <div className="text-sm text-zinc-400 uppercase tracking-wider">Landing Page Lift (CRO)</div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
