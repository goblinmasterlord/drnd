import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const HeroPattern = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [0.3, 0]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <motion.div 
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_65%)]"
        style={{ y, opacity }}
      >
        <svg
          className="absolute h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 2000 2000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Fine grid pattern */}
            <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.08"/>
            </pattern>

            {/* Subtle dot pattern */}
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" fillOpacity="0.05"/>
            </pattern>

            {/* Gradient definitions */}
            <linearGradient id="fade1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.07"/>
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.02"/>
            </linearGradient>

            <linearGradient id="fade2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.05"/>
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.01"/>
            </linearGradient>

            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="40"/>
            </filter>
          </defs>

          {/* Background patterns */}
          <rect width="100%" height="100%" fill="url(#grid)"/>
          <rect width="100%" height="100%" fill="url(#dots)"/>

          {/* Large gradient shapes */}
          <g filter="url(#blur)" opacity="0.7">
            <path 
              d="M1200 600 Q800 400 400 800 T0 1200"
              stroke="url(#fade1)"
              strokeWidth="100"
              fill="none"
            />
            <path 
              d="M1800 200 Q1400 600 1000 400 T200 800"
              stroke="url(#fade2)"
              strokeWidth="100"
              fill="none"
            />
          </g>

          {/* Interactive elements - subtle movements */}
          <motion.g
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: 'center' }}
          >
            <circle 
              cx="30%" 
              cy="20%" 
              r="300"
              fill="url(#fade1)"
              opacity="0.05"
            />
          </motion.g>

          <motion.g
            initial={{ rotate: 0 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: 'center' }}
          >
            <circle 
              cx="70%" 
              cy="60%" 
              r="400"
              fill="url(#fade2)"
              opacity="0.03"
            />
          </motion.g>

          {/* Additional decorative elements */}
          <rect 
            x="20%" 
            y="40%" 
            width="300" 
            height="300"
            transform="rotate(30 600 600)"
            fill="url(#fade1)"
            opacity="0.04"
          />

          <rect 
            x="60%" 
            y="70%" 
            width="400" 
            height="400"
            transform="rotate(-15 1200 1200)"
            fill="url(#fade2)"
            opacity="0.03"
          />

          {/* Fine details overlay */}
          <g opacity="0.1">
            <line 
              x1="0" 
              y1="0" 
              x2="2000" 
              y2="2000" 
              stroke="currentColor" 
              strokeWidth="0.5"
              strokeDasharray="4 4"
            />
            <line 
              x1="2000" 
              y1="0" 
              x2="0" 
              y2="2000" 
              stroke="currentColor" 
              strokeWidth="0.5"
              strokeDasharray="4 4"
            />
          </g>
        </svg>
      </motion.div>

      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent" />
    </div>
  );
};