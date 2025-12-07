'use client';

import React from 'react';
import { CreationOfAdam } from './CreationOfAdam';

export const HeroSection: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-[#F0EEE9] min-h-screen flex flex-col font-sans">
            {/* Background Hands Animation */}
            <div className="absolute inset-x-0 bottom-0 top-20 pointer-events-none z-0">
                <CreationOfAdam />
            </div>

            {/* Nav Mockup */}
            <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full z-10">
                <div className="text-xl font-bold flex items-center gap-2 text-gray-900">
                    {/* Logo Icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#0F766E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 17L12 22L22 17" stroke="#0F766E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12L12 17L22 12" stroke="#0F766E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Acordlayer
                </div>
                <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-600">
                    <a href="#" className="hover:text-gray-900 transition-colors">Features</a>
                    <a href="#" className="hover:text-gray-900 transition-colors">Pricing</a>
                    <a href="#" className="hover:text-gray-900 transition-colors">Docs</a>
                    <a href="#" className="hover:text-gray-900 transition-colors">Blog</a>
                </div>
                <div className="flex items-center gap-6 text-sm font-medium">
                    <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
                    <a href="/login" className="text-gray-600 hover:text-gray-900">Login</a>
                </div>
            </nav>

            <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 pt-10 pb-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="max-w-xl">
                        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                            Monitor AI Agents <br />
                            Like Linear Monitors <br />
                            Issues
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed mb-10">
                            See agents thinking in real-time. Debug in minutes. Deploy with confidence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            {/* Primary Button - Teal (Matches Mockup) */}
                            <button className="px-8 py-3.5 bg-[#2C7A7B] text-white rounded-full font-semibold hover:bg-[#236061] transition-colors shadow-sm">
                                Start Free Trial
                            </button>
                            <button className="px-8 py-3.5 bg-white text-gray-900 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full border border-gray-900 flex items-center justify-center text-[10px]">▶</span>
                                Watch 2-Min Demo
                            </button>
                        </div>

                        <div className="space-y-3 text-sm text-gray-600 font-medium">
                            <div className="flex items-center gap-2">
                                <span className="text-gray-900">✓</span> No credit card
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-yellow-600">⚡</span> Deploy in 2 hours
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-900">🚀</span> Join 500+ companies
                            </div>
                        </div>
                    </div>

                    {/* Visual - Dashboard Mockup */}
                    <div className="relative">
                        {/* Main Window */}
                        <div className="relative bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                            {/* Header */}
                            <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                                    <div className="ml-4 text-xs text-gray-500 font-mono">Agent Orchestration</div>
                                </div>
                                <div className="text-xs text-gray-400">99.95% Uptime</div>
                            </div>

                            {/* Body */}
                            <div className="p-6 bg-gray-50/50 min-h-[400px]">
                                <div className="flex gap-6">
                                    {/* Sidebar */}
                                    <div className="w-40 flex flex-col gap-2 border-r border-gray-200 pr-4 hidden sm:flex">
                                        <div className="h-8 bg-gray-900 rounded-md mb-4"></div>
                                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                    </div>

                                    {/* Main Content */}
                                    <div className="flex-1 space-y-4">
                                        {/* Metrics Row */}
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                                                <div className="text-xs text-gray-500">Active Agents</div>
                                                <div className="text-lg font-bold">15</div>
                                            </div>
                                            <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                                                <div className="text-xs text-gray-500">Executions</div>
                                                <div className="text-lg font-bold">1,245</div>
                                            </div>
                                            <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                                                <div className="text-xs text-gray-500">Success</div>
                                                <div className="text-lg font-bold text-green-600">99.2%</div>
                                            </div>
                                        </div>

                                        {/* Trace View */}
                                        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs">🤖</div>
                                                <div>
                                                    <div className="text-sm font-bold">Lead Qualifier Bot</div>
                                                    <div className="text-xs text-gray-400">Analyzing inbound email...</div>
                                                </div>
                                            </div>
                                            {/* Pipeline Viz */}
                                            <div className="flex items-center gap-2 text-[10px] text-gray-500 overflow-x-auto">
                                                <div className="bg-gray-100 px-2 py-1 rounded whitespace-nowrap">Email</div>
                                                <div>→</div>
                                                <div className="bg-blue-50 text-blue-600 px-2 py-1 rounded font-medium border border-blue-100 whitespace-nowrap">Extract</div>
                                                <div>→</div>
                                                <div className="bg-gray-100 px-2 py-1 rounded whitespace-nowrap">Classify</div>
                                                <div>→</div>
                                                <div className="bg-gray-100 px-2 py-1 rounded whitespace-nowrap">Reply</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badges */}
                        <div className="absolute -top-6 -right-6 bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 animate-bounce-slow">
                            <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">📊</div>
                            <div>
                                <div className="text-lg font-bold text-gray-900">99.95%</div>
                                <div className="text-xs text-gray-500">Uptime</div>
                            </div>
                        </div>

                        <div className="absolute -bottom-8 -left-8 bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">📈</div>
                            <div>
                                <div className="text-lg font-bold text-gray-900">847</div>
                                <div className="text-xs text-gray-500">Leads qualified</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Texture/Gradient Overlay if needed */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/40 to-transparent"></div>
        </section>
    );
};

export default HeroSection;
