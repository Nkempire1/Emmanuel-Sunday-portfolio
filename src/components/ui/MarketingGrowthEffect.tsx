'use client';
import { motion } from 'framer-motion';

export default function MarketingGrowthEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center z-[-1] opacity-60">
      <svg 
        viewBox="0 0 1200 800" 
        className="w-full h-full max-w-7xl mx-auto" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="growthLine" x1="0" y1="800" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="0.4" stopColor="#6366f1" stopOpacity="0.8" />
            <stop offset="1" stopColor="#10b981" stopOpacity="1" />
          </linearGradient>
          
          <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#3b82f6" stopOpacity="0.15" />
            <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>

          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop stopColor="#10b981" stopOpacity="0.6" />
            <stop offset="1" stopColor="#10b981" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Abstract Bar Chart / Volume Bars */}
        {[
          { x: 150, y: 650, h: 150 },
          { x: 350, y: 550, h: 250 },
          { x: 550, y: 400, h: 400 },
          { x: 750, y: 250, h: 550 },
          { x: 950, y: 100, h: 700 }
        ].map((bar, i) => (
          <motion.rect
            key={`bar-${i}`}
            x={bar.x}
            y={bar.y}
            width="80"
            height={bar.h}
            rx="8"
            fill="url(#barGrad)"
            initial={{ opacity: 0, height: 0, y: bar.y + bar.h }}
            whileInView={{ opacity: 1, height: bar.h, y: bar.y }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
          />
        ))}

        {/* Exponential Growth Curve */}
        <motion.path
          d="M 50 700 C 400 700, 600 400, 1100 100"
          stroke="url(#growthLine)"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />

        {/* Signal travelling along the growth curve */}
        <motion.circle
          r="6"
          fill="#fff"
          className="drop-shadow-[0_0_15px_rgba(255,255,255,1)]"
          style={{ offsetPath: "path('M 50 700 C 400 700, 600 400, 1100 100')" }}
          animate={{ offsetDistance: ["0%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Data Nodes (Conversion Points) */}
        {[
          { cx: 310, cy: 625, delay: 0.5 },
          { cx: 645, cy: 365, delay: 1.2 },
          { cx: 1100, cy: 100, delay: 2.0 }
        ].map((node, i) => (
          <g key={`node-${i}`}>
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="24"
              fill="url(#nodeGlow)"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.5] }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: node.delay, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="6"
              fill="#10b981"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: node.delay + 0.5 }}
            />
          </g>
        ))}

        {/* Omnichannel Targeting Arcs (representing expanding audience reach) */}
        <motion.path
          d="M 900 150 A 250 250 0 0 1 1100 350"
          stroke="#6366f1"
          strokeWidth="2"
          strokeDasharray="8 8"
          strokeOpacity="0.4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1.5 }}
        />
        <motion.path
          d="M 850 100 A 350 350 0 0 1 1150 400"
          stroke="#3b82f6"
          strokeWidth="1.5"
          strokeDasharray="4 12"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1.7 }}
        />
      </svg>
    </div>
  );
}
