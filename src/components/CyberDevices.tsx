import React from 'react';
import { motion } from 'motion/react';
import { Shield, Network, Cpu, Database } from 'lucide-react';
import arpitPhoto from '../assets/images/arpit-real-photo.jfif';

export const CyberDevices: React.FC = () => {
  const devices = [
    { icon: <Shield size={40} className="text-cyber-blue" />, label: "Palo Alto HA", delay: 0, x: -100, y: -80 },
    { icon: <Network size={48} className="text-cyber-purple" />, label: "Cisco Core", delay: 0.2, x: 120, y: -40 },
    { icon: <Cpu size={36} className="text-white" />, label: "DevOps Nodes", delay: 0.4, x: -60, y: 100 },
    { icon: <Database size={44} className="text-cyber-violet" />, label: "MPLS Gateway", delay: 0.6, x: 80, y: 120 },
  ];

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      <div className="absolute w-64 h-64 bg-cyber-purple/20 rounded-full blur-[100px] animate-pulse" />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-72 h-72 rounded-3xl overflow-hidden border border-cyber-blue/40 glass shadow-2xl"
      >
        <img
          src={arpitPhoto}
          alt="Arpit Sharma"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-5 left-5">
          <p className="text-xs font-mono text-cyber-blue">ARPIT SHARMA</p>
          <div className="flex gap-2 mt-2 items-center">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/80">
              NETWORK ENGINEER ONLINE
            </p>
          </div>
        </div>
      </motion.div>

      {devices.map((device, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: 1,
            x: device.x,
            y: device.y,
            transition: { delay: device.delay + 0.5, duration: 0.8 }
          }}
          className="absolute z-20 group"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: device.delay
            }}
            className="flex flex-col items-center gap-2"
          >
            <div className="relative p-4 rounded-2xl glass-dark border border-white/10 group-hover:border-cyber-blue/50 transition-all duration-300 cursor-help shadow-xl">
              {device.icon}
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyber-blue animate-ping" />
            </div>

            <span className="text-[10px] font-mono text-cyber-blue/70 uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
              {device.label}
            </span>
          </motion.div>
        </motion.div>
      ))}

      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-cyber-purple)" />
            <stop offset="100%" stopColor="var(--color-cyber-blue)" />
          </linearGradient>
        </defs>

        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="0.5"
          strokeDasharray="5 5"
        />
      </svg>
    </div>
  );
};
