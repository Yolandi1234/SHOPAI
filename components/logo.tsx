"use client";

import { motion } from "framer-motion";

type LogoProps = {
  compact?: boolean;
};

const nodes = [
  { x1: 18, y1: 22, x2: 54, y2: 10, cx: 58, cy: 8, color: "#ff5ecf" },
  { x1: 26, y1: 38, x2: 68, y2: 24, cx: 72, cy: 22, color: "#74d7ff" },
  { x1: 38, y1: 52, x2: 84, y2: 52, cx: 89, cy: 52, color: "#8b79ff" },
  { x1: 28, y1: 66, x2: 70, y2: 78, cx: 75, cy: 80, color: "#5fd5ff" },
];

export function Logo({ compact = false }: LogoProps) {
  return (
    <div className={`flex items-center ${compact ? "gap-3" : "gap-4"} select-none`}>
      <motion.div
        className={`relative ${compact ? "h-12 w-14" : "h-16 w-20"}`}
        initial={{ opacity: 0, scale: 0.9, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <svg viewBox="0 0 104 88" className="h-full w-full overflow-visible">
          <defs>
            <linearGradient id="cart-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff57cd" />
              <stop offset="55%" stopColor="#8f6bff" />
              <stop offset="100%" stopColor="#66ddff" />
            </linearGradient>
          </defs>
          <motion.path
            d="M8 18h14l10 34h42l13-22H34"
            fill="none"
            stroke="url(#cart-stroke)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
          <motion.circle
            cx="40"
            cy="73"
            r="6"
            fill="#ff57cd"
            animate={{ scale: [1, 1.16, 1], opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="79"
            cy="73"
            r="6"
            fill="#66ddff"
            animate={{ scale: [1, 1.16, 1], opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 2.4, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
          />
          {nodes.map((node, index) => (
            <g key={`${node.cx}-${node.cy}`}>
              <motion.line
                x1={node.x1}
                y1={node.y1}
                x2={node.x2}
                y2={node.y2}
                stroke={node.color}
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0.4 }}
                animate={{ pathLength: 1, opacity: [0.45, 1, 0.45] }}
                transition={{
                  duration: 1,
                  delay: 0.15 * index,
                  repeat: Infinity,
                  repeatType: "mirror",
                  repeatDelay: 0.4,
                }}
              />
              <motion.circle
                cx={node.cx}
                cy={node.cy}
                r="5"
                fill={node.color}
                animate={{ scale: [1, 1.35, 1], opacity: [0.55, 1, 0.55] }}
                transition={{ duration: 2, delay: 0.2 * index, repeat: Infinity }}
              />
            </g>
          ))}
        </svg>
      </motion.div>

      <div className={`leading-none ${compact ? "text-3xl" : "text-5xl sm:text-6xl"} font-display font-black tracking-tight`}>
        <span className="text-gradient-shop">SHOP</span>
        <span className="text-gradient-ai drop-shadow-[0_0_18px_rgba(127,202,255,0.4)]">AI</span>
      </div>
    </div>
  );
}
