import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function MiraiDetailedStudy() {
  return (
    <main className="min-h-screen bg-background py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
        
        <div className="mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">B2B SaaS & Tech</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Mirai Labs: The ABM Revenue Engine</h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            A comprehensive breakdown of how I transformed a scattered lead generation strategy into a highly predictable Account-Based Marketing (ABM) machine for a premier AI engineering studio.
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-white text-2xl font-bold mt-12 mb-6 border-b border-white/10 pb-4">The Starting Point</h2>
          <p className="text-zinc-300">
            Mirai Labs provides high-ticket product engineering and AI infrastructure services. When I joined as Growth Marketing Lead, the primary acquisition channel was broad-targeting search ads. This resulted in a high volume of low-quality leads (startups without budget) and a Cost-Per-Acquisition (CPA) that was unsustainable. 
          </p>

          <h2 className="text-white text-2xl font-bold mt-12 mb-6 border-b border-white/10 pb-4">Step-by-Step Execution</h2>
          
          <h3 className="text-white text-xl font-bold mt-8 mb-4">Step 1: Redefining the Ideal Customer Profile (ICP)</h3>
          <p className="text-zinc-300">
            I halted the broad search campaigns and interviewed the sales team to define our true ICP: <strong>CTOs and VPs of Engineering at mid-market enterprise companies ($50M+ revenue)</strong> who were struggling with technical debt or lacked in-house AI engineering talent.
          </p>

          <h3 className="text-white text-xl font-bold mt-8 mb-4">Step 2: Launching LinkedIn ABM Campaigns</h3>
          <p className="text-zinc-300">
            I built a targeted list of 500 accounts matching our ICP and deployed LinkedIn Sponsored Content and InMail campaigns. 
          </p>
          <ul className="list-disc pl-6 text-zinc-300 space-y-2 my-4">
            <li><strong>Creative Strategy:</strong> Replaced generic "hire us" messaging with highly specific technical pain points (e.g., scaling infrastructure, ML model deployment).</li>
            <li><strong>Offer:</strong> Instead of "Contact Sales", the CTA was an invitation to a technical architecture review.</li>
          </ul>

          <h3 className="text-white text-xl font-bold mt-8 mb-4">Step 3: Architecting the CRM & Automation Workflow</h3>
          <p className="text-zinc-300">
            Traffic is useless without conversion. I rebuilt the HubSpot CRM pipeline to accurately reflect the B2B sales cycle. I instituted a <strong>Lead Scoring Model</strong>:
          </p>
          <ul className="list-disc pl-6 text-zinc-300 space-y-2 my-4">
            <li>Downloading a whitepaper = +10 points</li>
            <li>Visiting the pricing page = +20 points</li>
            <li>Attending a webinar = +30 points</li>
          </ul>
          <p className="text-zinc-300">
            Using <strong>n8n</strong>, I orchestrated a complex automation: Once a lead hit 50 points, n8n enriched their company data via Clearbit and instantly alerted the sales team via Slack, dropping the lead into an aggressive HubSpot sequence.
          </p>

          <h3 className="text-white text-xl font-bold mt-8 mb-4">Step 4: Enterprise SEO Strategy (SEMrush)</h3>
          <p className="text-zinc-300">
            Paid acquisition was only the short-term play. Using <strong>SEMrush</strong>, I identified low-difficulty, high-intent keywords such as "enterprise AI engineering firm" and "cloud infrastructure migration." I spearheaded a content roadmap that scaled our organic traffic by <strong>+812% (reaching 853K visits)</strong>, establishing massive authority.
          </p>

          <h3 className="text-white text-xl font-bold mt-8 mb-4">Step 5: Data Visualization with Power BI</h3>
          <p className="text-zinc-300">
            I integrated LinkedIn Ads, Google Analytics, and HubSpot data into a unified <strong>Power BI dashboard</strong>. This allowed the executive team to see the exact MRR (Monthly Recurring Revenue) generated from specific ad spend, completely eliminating guesswork.
          </p>

          <h2 className="text-white text-2xl font-bold mt-12 mb-6 border-b border-white/10 pb-4">The Final Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="p-6 bg-zinc-900 rounded-xl border border-white/5 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">-35%</div>
              <div className="text-sm text-zinc-400">Cost-Per-Acquisition</div>
            </div>
            <div className="p-6 bg-zinc-900 rounded-xl border border-white/5 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">+120%</div>
              <div className="text-sm text-zinc-400">Sales Qualified Leads (SQLs)</div>
            </div>
            <div className="p-6 bg-zinc-900 rounded-xl border border-white/5 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">$1.2M</div>
              <div className="text-sm text-zinc-400">Pipeline Generated in 6 Mos</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
