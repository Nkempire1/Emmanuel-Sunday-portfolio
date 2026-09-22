'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10 print:hidden"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="font-bold text-white text-lg tracking-tight hover:text-blue-400 transition-colors flex items-center gap-2"
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-[10px] text-white">
            ES
          </div>
          Emmanuel Sunday
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
          <Link href="/#work" className="hover:text-white transition-colors">Strategy & Work</Link>
          <Link href="/#funnels" className="hover:text-white transition-colors">Funnels</Link>
          <Link href="/#creatives" className="hover:text-white transition-colors">Creatives</Link>
          
          <div className="w-px h-4 bg-zinc-700 mx-2"></div>
          
          <Link 
            href="https://www.linkedin.com/in/emmanuel-sunday-9217641ba/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-[#0a66c2] transition-colors"
            title="LinkedIn Profile"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </Link>

          <a 
            href="/Emmanuel_Sunday_Resume.pdf" 
            download
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-all border border-blue-500/20 ml-2 shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] font-medium"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>

          <Link 
            href="/#contact" 
            className="px-4 py-2 ml-2 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            Contact Me
          </Link>
        </nav>

        {/* Mobile Navigation (Simplified) */}
        <nav className="flex md:hidden items-center gap-3 text-xs font-medium text-zinc-400">
          <Link href="/#work" className="hover:text-white transition-colors">Work</Link>
          
          <Link 
            href="https://www.linkedin.com/in/emmanuel-sunday-9217641ba/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-[#0a66c2] transition-colors"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </Link>

          <a 
            href="/Emmanuel_Sunday_Resume.pdf" 
            download
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all border border-blue-500/20 font-medium"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Resume
          </a>

          <Link href="/#contact" className="text-white hover:text-zinc-300 transition-colors border border-white/10 px-3 py-1.5 rounded-full bg-white/5">
            Contact
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
