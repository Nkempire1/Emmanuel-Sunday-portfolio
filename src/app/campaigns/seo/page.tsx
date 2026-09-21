import Link from 'next/link';

export default function SEOCampaign() {
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
          <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Strategic Deep Dive</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Enterprise Technical SEO & Organic Growth</h1>
          <p className="text-xl text-zinc-400">Scaling Mirai Labs' organic engine to 853K monthly visits and establishing category authority in the hyper-competitive Enterprise AI sector.</p>
        </header>

        <section className="mb-16 space-y-6">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3 border-b border-white/10 pb-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 text-lg">1</span> 
            The Core Business Challenge
          </h2>
          <p className="leading-relaxed text-lg">
            While our paid Account-Based Marketing (ABM) campaigns on LinkedIn and Google Ads were driving massive pipeline, our blended Customer Acquisition Cost (CAC) was still highly dependent on active ad spend. The executive team wanted a sustainable, long-term organic moat that could generate pipeline even if we turned the ad platforms off tomorrow. 
          </p>
          <p className="leading-relaxed">
            The challenge? "AI" and "Cloud Engineering" are some of the most fiercely competitive and saturated keywords on the internet. We were going up against legacy giants like AWS, IBM, and Microsoft, all of whom had Domain Authorities (DA) of 90+. 
          </p>
          <p className="leading-relaxed">
            Furthermore, the generic blog posts previously written by freelance copywriters (e.g., "What is Artificial Intelligence?") completely failed to rank. Even when they did drive accidental traffic, they completely failed to convert. Highly technical CTOs and Engineering VPs immediately recognized the lack of depth and bounced from the site. I needed to build an SEO architecture that satisfied Google's algorithm while providing genuine, undeniable value to veteran software engineers.
          </p>
        </section>

        <section className="mb-16 space-y-6">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3 border-b border-white/10 pb-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 text-lg">2</span> 
            End-to-End Campaign Planning & Strategy
          </h2>
          <p className="leading-relaxed">
            I architected a "Subject Matter Expert (SME) Led" SEO strategy. I convinced leadership to let me monopolize 2 hours of our lead engineers' time every week. We would stop competing for broad vanity metrics and pivot to dominating hyper-specific, long-tail architectural queries that indicated immediate buying intent.
          </p>
          
          <h3 className="text-xl font-bold text-white mt-8 mb-4">Phase 1: Deep Keyword Research (SEMrush & Search Console)</h3>
          <p className="leading-relaxed">
            I started by combining data from <strong>Google Search Console</strong> and <strong>SEMrush</strong> to identify our "striking distance" keywords, which were terms where we ranked on page 2 or 3 but lacked the on-page depth to break into the top 3 spots. 
          </p>
          <p className="leading-relaxed">
            Then, I used SEMrush's Keyword Magic Tool to identify high-intent, low-difficulty technical gaps. Instead of targeting "Cloud Migration," we targeted <em>"AWS to Azure multi-cloud migration architecture for fintech compliance."</em> The search volume was much lower (maybe 200 searches a month), but a single conversion from that keyword was worth a $150k contract. I mapped these keywords to the exact search queries our highest-converting Google Ads campaigns were already triggering on, ensuring organic alignment with paid data.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Phase 2: The Pillar & Cluster Architecture</h3>
          <p className="leading-relaxed">
            I mapped out three core "Pillar Pages" based on Mirai's most profitable services: Enterprise LLM Deployment, Legacy Code Refactoring, and Cloud Security. Around these three pillars, I built 40+ highly specific "cluster" articles. 
          </p>
          <p className="leading-relaxed">
            To create the content, I interviewed our Senior Lead Engineers on recorded Zoom calls, asking them to explain how they solved specific client problems. I then transcribed those calls and transformed their technical insights into readable, SEO-optimized cluster pages. Every cluster page linked back to the main Pillar page using optimized anchor text. This internal linking structure consolidated our topical authority in Google's eyes, signaling that we were the ultimate repository of knowledge on these specific subjects.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Phase 3: Technical SEO & Core Web Vitals</h3>
          <p className="leading-relaxed">
            Content alone isn't enough if the technical foundation is broken. I audited our Next.js codebase using Lighthouse and Google PageSpeed Insights. I worked with the dev team to implement Dynamic Import routing and optimized image payloads (WebP), dropping our Largest Contentful Paint (LCP) from 3.2 seconds to 1.1 seconds. 
          </p>
          <p className="leading-relaxed">
            I also injected dynamic JSON-LD Schema Markup across the site, specifically `Article`, `FAQPage`, and `TechArticle` schemas. This allowed Google to pull our technical definitions directly into Featured Snippets (Position Zero), instantly boosting our Click-Through Rate (CTR) on the SERPs.
          </p>
        </section>

        <section className="mb-16 space-y-6">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3 border-b border-white/10 pb-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 text-lg">3</span> 
            Execution, Link Building & Analytics
          </h2>
          <p className="leading-relaxed">
            With the technical foundation and content architecture in place, I spearheaded a Digital PR and Link Building campaign to increase our Domain Authority. I pitched our engineers' unique architectural diagrams and whitepapers to technical publications like Hacker Noon, DZone, and InfoQ. By providing genuinely useful open-source snippets and architectural blueprints, we naturally acquired high Domain Rating (DR) backlinks from trusted developer communities.
          </p>
          <p className="leading-relaxed">
            To track the impact, I built a custom <strong>Looker Studio</strong> dashboard that merged Google Analytics 4 (GA4) traffic data with SEMrush ranking data and HubSpot CRM pipeline data. This allowed me to prove to the CEO exactly which blog posts were generating actual revenue, rather than just traffic. 
          </p>
          <p className="leading-relaxed">
            Through rigorous Conversion Rate Optimization (CRO), I replaced generic "Subscribe to Newsletter" popups with highly contextual lead magnets. If a user was reading a cluster page about "Docker Container Security," the CTA was a downloadable "20-Point Container Security Checklist." This contextual relevance increased blog-to-lead conversion rates by over 300%.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3 border-b border-white/10 pb-8 mb-8">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 text-lg">4</span> 
            KPIs, Analytics & Final Results
          </h2>
          <p className="leading-relaxed mb-8">
            The combination of high-intent keywords, authentic engineering expertise, technical optimization, and strategic CRO caused an explosive compounded growth loop. Within a year, we weren't just ranking; we were dominating. Organic search became the #1 driver of high-LTV enterprise pipeline, fundamentally lowering the blended CAC of the entire marketing department.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 bg-zinc-900 border border-white/10 rounded-2xl text-center shadow-xl">
              <div className="text-3xl font-bold text-white mb-2">+812%</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">Organic Traffic Growth</div>
            </div>
            <div className="p-6 bg-zinc-900 border border-white/10 rounded-2xl text-center shadow-xl">
              <div className="text-3xl font-bold text-white mb-2">853K</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">Monthly Visits</div>
            </div>
            <div className="p-6 bg-zinc-900 border border-white/10 rounded-2xl text-center shadow-xl">
              <div className="text-3xl font-bold text-white mb-2">112.5k</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">Ranking Keywords</div>
            </div>
            <div className="p-6 bg-zinc-900 border border-white/10 rounded-2xl text-center shadow-xl">
              <div className="text-3xl font-bold text-white mb-2">78</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">Domain Authority (DA)</div>
            </div>
            <div className="p-6 bg-zinc-900 border border-white/10 rounded-2xl text-center shadow-xl">
              <div className="text-3xl font-bold text-white mb-2">1.1s</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">LCP (Page Speed)</div>
            </div>
            <div className="p-6 bg-zinc-900 border border-white/10 rounded-2xl text-center shadow-xl">
              <div className="text-3xl font-bold text-white mb-2">+300%</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">Blog CVR Lift</div>
            </div>
            <div className="p-6 bg-zinc-900 border border-white/10 rounded-2xl text-center shadow-xl">
              <div className="text-3xl font-bold text-white mb-2">40+</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">SME Pillar Pages</div>
            </div>
            <div className="p-6 bg-zinc-900 border border-white/10 rounded-2xl text-center shadow-xl">
              <div className="text-3xl font-bold text-white mb-2">#1</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">Pipeline Source</div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
