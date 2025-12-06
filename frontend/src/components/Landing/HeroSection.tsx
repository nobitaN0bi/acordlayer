'use client';

import React from 'react';

export const HeroSection: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:py-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-6">
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-teal-600 bg-teal-50 border border-teal-200">
                                ✨ AI Employee Platform
                            </span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-gray-900 mb-6">
                            Hire 20 World-Class <span className="text-teal-600">AI Employees</span>
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            Deploy specialized AI agents for sales, support, marketing, and operations.
                            Watch your business run 24/7 with zero human supervision required.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <button className="px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Start Free Trial
                            </button>
                            <button className="px-8 py-4 border-2 border-teal-600 text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-all duration-200">
                                Watch 2-Min Demo
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <span className="text-lg">✨</span>
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-lg">⚡</span>
                                <span>Deploy in 2 hours</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-lg">🚀</span>
                                <span>Join 500+ companies</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual */}
                    <div className="relative">
                        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                            <div className="aspect-video bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">📊</div>
                                    <div className="text-gray-600 font-semibold">Dashboard Preview</div>
                                    <div className="text-sm text-gray-400 mt-2">See live metrics in real-time</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating cards */}
                        <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                            <div className="text-sm font-semibold text-gray-900">847</div>
                            <div className="text-xs text-gray-600">Leads qualified today</div>
                        </div>

                        <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                            <div className="text-sm font-semibold text-green-600">✓ 99.95%</div>
                            <div className="text-xs text-gray-600">System uptime</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
