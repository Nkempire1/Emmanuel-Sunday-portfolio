import React from 'react';
import PrintButton from '@/components/ui/PrintButton';

export const metadata = {
  title: 'Resume | Emmanuel Sunday',
  description: 'Senior Growth Marketer Resume',
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-zinc-100 py-10 print:py-0 print:bg-white font-sans">
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          @page { margin: 0; }
          body { padding: 1.5cm; }
        }
      `}} />
      {/* 
        This outer container limits the width on web to look like a piece of paper,
        but expands to full width when printing.
      */}
      <div className="max-w-[850px] mx-auto bg-white shadow-2xl print:shadow-none p-12 print:p-0 text-slate-900">
        
        {/* Header Section */}
        <header className="border-b-2 border-slate-900 pb-6 mb-6">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight uppercase mb-2">
            Emmanuel Sunday
          </h1>
          <h2 className="text-xl font-medium text-blue-700 mb-4">
            Senior Growth Marketer | Demand Generation & RevOps
          </h2>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600 font-medium">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              emmanuelsundaynk@gmail.com
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              linkedin.com/in/emmanuel-sunday-9217641ba/
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              marketing-portfolio-lemon-beta.vercel.app
            </span>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <p className="text-slate-700 leading-relaxed">
            Data-driven Growth Marketer with 11 years of experience architecting scalable acquisition engines, automating CRM workflows, and driving enterprise pipeline. Proven expertise in combining high-level strategic planning with hands-on execution across Account-Based Marketing (ABM), paid media, technical SEO, and Revenue Operations (RevOps). 
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-8">
          <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-2 mb-4">
            Professional Experience
          </h3>

          {/* Mirai Labs */}
          <div className="mb-6 page-break-inside-avoid">
            <div className="flex justify-between items-end mb-2">
              <div>
                <h4 className="text-xl font-bold text-slate-900">Mirai Labs</h4>
                <div className="text-blue-700 font-semibold">Senior Demand Generation Manager</div>
              </div>
              <div className="text-slate-500 font-medium text-sm text-right">
                B2B Enterprise Cloud & AI
              </div>
            </div>
            <p className="text-sm text-slate-700 mb-3 italic">
              Architected a multi-channel ABM pipeline targeting CTOs and Engineering VPs at $50M+ tech enterprises.
            </p>
            <ul className="list-disc list-outside ml-5 space-y-2 text-slate-700 text-sm leading-relaxed">
              <li>
                <strong>Pipeline & Revenue:</strong> Generated <strong>$450K in enterprise pipeline</strong> in 6 months, contributing to a <strong>+38% YoY revenue growth</strong>.
              </li>
              <li>
                <strong>Account-Based Marketing (ABM):</strong> Deployed highly targeted LinkedIn Sponsored Content to a curated list of 350 executives, achieving a <strong>1.95% CTR</strong> (3x industry average) and a <strong>$42.80 Cost per Conversion</strong>.
              </li>
              <li>
                <strong>RevOps Automation:</strong> Engineered a HubSpot + n8n lead-scoring automation system that alerted sales via Slack when target accounts crossed intent thresholds, accelerating sales cycle velocity to <strong>46 days</strong> and increasing SQLs by <strong>42%</strong>.
              </li>
              <li>
                <strong>Technical SEO:</strong> Spearheaded a content roadmap targeting low-difficulty, high-intent engineering keywords, scaling organic traffic by <strong>+215%</strong> (reaching <strong>42.5K monthly visits</strong>) and reducing blended CPA by <strong>28%</strong>.
              </li>
              <li>
                <strong>CRO & Analytics:</strong> Redesigned core landing pages with Clearbit data enrichment API integrations, resulting in a <strong>42% lift</strong> in conversion rates. Built custom Power BI dashboards for executive pipeline tracking.
              </li>
            </ul>
          </div>

          {/* Walls Property Management */}
          <div className="mb-6 page-break-inside-avoid">
            <div className="flex justify-between items-end mb-2">
              <div>
                <h4 className="text-xl font-bold text-slate-900">Walls Property Management</h4>
                <div className="text-blue-700 font-semibold">Senior Growth Marketing Manager</div>
              </div>
              <div className="text-slate-500 font-medium text-sm text-right">
                Real Estate Portfolio (320 Units)
              </div>
            </div>
            <p className="text-sm text-slate-700 mb-3 italic">
              Transformed local property marketing through geo-fenced Paid Social, CRM automation, and data analytics.
            </p>
            <ul className="list-disc list-outside ml-5 space-y-2 text-slate-700 text-sm leading-relaxed">
              <li>
                <strong>Occupancy & MRR:</strong> Achieved and sustained a <strong>94.5% portfolio occupancy rate</strong>, securing <strong>$680K in Monthly Recurring Revenue (MRR)</strong>.
              </li>
              <li>
                <strong>Omnichannel Acquisition:</strong> Designed and executed geo-fenced Meta Carousel ads targeting high-income renters, maintaining a highly efficient blended CPA of <strong>$62.50</strong>.
              </li>
              <li>
                <strong>CRM Automation:</strong> Architected a Zapier and GoHighLevel integration linking Meta and Zillow leads to an SMS auto-responder, achieving a <strong>60-second speed-to-lead</strong> response time.
              </li>
              <li>
                <strong>Analytics (GA4):</strong> Configured Google Analytics 4 custom conversion events for real-time tracking, scaling website traffic to <strong>24K users (+65% growth)</strong> with peak daily traffic of 4,800 visitors.
              </li>
            </ul>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-8 page-break-inside-avoid">
          <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-2 mb-4">
            Core Competencies & Tooling
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
            <div>
              <strong className="block text-slate-900 mb-1">Growth Strategies</strong>
              <p>Account-Based Marketing (ABM), Demand Generation, Technical SEO, Conversion Rate Optimization (CRO), Omnichannel Advertising.</p>
            </div>
            <div>
              <strong className="block text-slate-900 mb-1">Marketing Technology (MarTech)</strong>
              <p>HubSpot, GoHighLevel, Zapier, n8n, Clearbit, Meta Ads Manager, LinkedIn Campaign Manager.</p>
            </div>
            <div>
              <strong className="block text-slate-900 mb-1">Data & Analytics</strong>
              <p>Google Analytics 4 (GA4), Power BI, Looker Studio, SEMrush.</p>
            </div>
            <div>
              <strong className="block text-slate-900 mb-1">Foundational Skills</strong>
              <p>Revenue Operations (RevOps), Lead Scoring Automation, Customer Psychology, Critical Thinking (B.A. Philosophy).</p>
            </div>
          </div>
        </section>
        
        {/* Print instructions hidden during actual print */}
        <div className="print:hidden mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200 text-center">
          <h4 className="text-blue-800 font-bold mb-2">How to export this resume:</h4>
          <p className="text-blue-600 text-sm mb-4">
            Press <strong>Cmd + P</strong> (Mac) or <strong>Ctrl + P</strong> (Windows) and select <strong>"Save as PDF"</strong>.<br/>
            Make sure "Background graphics" is enabled and "Headers and footers" are disabled in your print settings.
          </p>
          <PrintButton />
        </div>

      </div>
    </div>
  );
}
