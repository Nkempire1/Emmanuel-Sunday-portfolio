import Hero from '@/components/sections/Hero';
import CampaignCapabilities from '@/components/sections/CampaignCapabilities';
import MiraiCaseStudy from '@/components/sections/MiraiCaseStudy';
import WallsCaseStudy from '@/components/sections/WallsCaseStudy';
import CreativeCarousel from '@/components/sections/CreativeCarousel';
import LandingPagesSection from '@/components/sections/LandingPagesSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Hero />
      <div id="work">
        <CampaignCapabilities />
        <MiraiCaseStudy />
        <WallsCaseStudy />
        <LandingPagesSection />
        <CreativeCarousel />
      </div>
      
      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 md:px-8 border-t border-white/5 bg-zinc-950 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Let's build your growth engine.</h2>
          <p className="text-zinc-400 text-lg">
            I'm currently looking for new opportunities to lead marketing teams and drive scalable revenue.
          </p>
          <a href="mailto:hello@example.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-zinc-950 font-bold text-lg hover:bg-zinc-200 transition-colors">
            Contact Me
          </a>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} Emmanuel Sunday. All rights reserved.</p>
      </footer>
    </main>
  );
}
