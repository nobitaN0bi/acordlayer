'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const CreationOfAdam: React.FC = () => {
    // Simplified stylized paths for the hands
    // Left Hand (Adam/Human) - Reaching up/right
    const leftHandPath = "M10 200 Q 50 180, 80 150 T 150 120 T 180 140 T 160 170 M 150 120 L 190 110 M 150 120 L 140 90";

    // Right Hand (God/AI) - Reaching down/left
    const rightHandPath = "M490 50 Q 450 70, 420 100 T 350 130 T 320 110 T 340 80 M 350 130 L 310 140 M 350 130 L 360 160";

    // We'll use a more abstract 'tech' representation with connected nodes instead of trying to draw perfect anatomy with bezier curves manually
    // This avoids the 'bad drawing' risk while hitting the 'tech/agent' vibe.

    return (
        <div className="w-full h-full flex items-center justify-center opacity-30">
            <svg viewBox="0 0 800 400" className="w-full h-full" style={{ overflow: 'visible' }}>
                {/* Left Hand Group */}
                <motion.g
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    {/* Arm */}
                    <path d="M-100 400 C 50 350, 100 300, 200 250" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-400" strokeDasharray="4 4" />
                    {/* Hand/Fingers abstract */}
                    <circle cx="200" cy="250" r="15" className="fill-gray-300" />
                    <circle cx="240" cy="230" r="8" className="fill-gray-400" />
                    <circle cx="270" cy="220" r="6" className="fill-gray-600" /> {/* Index Tip */}

                    {/* Connecting lines */}
                    <line x1="200" y1="250" x2="240" y2="230" stroke="currentColor" strokeWidth="1" className="text-gray-400" />
                    <line x1="240" y1="230" x2="270" y2="220" stroke="currentColor" strokeWidth="1" className="text-gray-400" />
                </motion.g>

                {/* Right Hand Group */}
                <motion.g
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                >
                    {/* Arm */}
                    <path d="M900 -50 C 750 50, 600 150, 500 200" stroke="currentColor" strokeWidth="2" fill="none" className="text-green-600" strokeDasharray="4 4" />

                    {/* Hand/Fingers abstract */}
                    <circle cx="500" cy="200" r="15" className="fill-green-200" />
                    <circle cx="460" cy="210" r="8" className="fill-green-400" />
                    <circle cx="430" cy="220" r="6" className="fill-green-600" /> {/* Index Tip */}

                    {/* Connecting lines */}
                    <line x1="500" y1="200" x2="460" y2="210" stroke="#0F766E" strokeWidth="1" />
                    <line x1="460" y1="210" x2="430" y2="220" stroke="#0F766E" strokeWidth="1" />
                </motion.g>

                {/* Spark/Connection Point */}
                <motion.circle
                    cx="350"
                    cy="220"
                    r="4"
                    className="fill-teal-500"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                />

                {/* Connection Line appearing */}
                <motion.line
                    x1="270" y1="220"
                    x2="430" y2="220"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 1, delay: 1.2 }}
                />

                <defs>
                    <linearGradient id="gradient" x1="270" y1="220" x2="430" y2="220" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9CA3AF" />
                        <stop offset="1" stopColor="#0F766E" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};
