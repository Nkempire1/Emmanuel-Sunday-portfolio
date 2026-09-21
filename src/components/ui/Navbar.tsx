'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10"
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
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="/#work" className="hover:text-white transition-colors">Strategy & Work</Link>
          <Link href="/#funnels" className="hover:text-white transition-colors">Funnels</Link>
          <Link href="/#creatives" className="hover:text-white transition-colors">Creatives</Link>
          <Link 
            href="/#contact" 
            className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/5"
          >
            Contact Me
          </Link>
        </nav>

        {/* Mobile Navigation (Simplified) */}
        <nav className="flex md:hidden items-center gap-4 text-xs font-medium text-zinc-400">
          <Link href="/#work" className="hover:text-white transition-colors">Work</Link>
          <Link href="/#contact" className="text-white hover:text-zinc-300 transition-colors">Contact</Link>
        </nav>
      </div>
    </motion.header>
  );
}
