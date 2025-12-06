'use client';

import React from 'react';
import { Circle, Loader2, CheckCircle } from 'lucide-react';

interface ReasoningStep {
    step: number;
    title: string;
    status: 'pending' | 'processing' | 'complete';
    details: string[];
    duration?: number;
}

interface ReasoningTraceProps {
    steps: ReasoningStep[];
    isLive?: boolean;
}

export const ReasoningTrace: React.FC<ReasoningTraceProps> = ({
    steps,
    isLive = false,
}) => {
    const statusConfig = {
        pending: { icon: <Circle size={16} />, color: 'text-gray-400', bg: 'bg-gray-100' },
        processing: { icon: <Loader2 size={16} className="animate-spin" />, color: 'text-teal-600', bg: 'bg-teal-50' },
        complete: { icon: <CheckCircle size={16} />, color: 'text-green-600', bg: 'bg-green-50' },
    };

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
                <h3 className="text-lg font-bold text-gray-900">Reasoning Trace</h3>
                {isLive && (
                    <div className="flex items-center gap-2 text-sm text-teal-600 font-semibold">
                        <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse"></div>
                        Live
                    </div>
                )}
            </div>

            {/* Steps */}
            <div className="space-y-4">
                {steps.map((step, idx) => {
                    const config = statusConfig[step.status];

                    return (
                        <div key={idx} className="relative">
                            {/* Vertical line connector */}
                            {idx < steps.length - 1 && (
                                <div
                                    className={`absolute left-4 top-12 w-0.5 h-12 ${step.status === 'complete'
                                        ? 'bg-green-300'
                                        : step.status === 'processing'
                                            ? 'bg-teal-300'
                                            : 'bg-gray-200'
                                        }`}
                                ></div>
                            )}

                            {/* Step item */}
                            <div className="flex gap-4 relative z-10">
                                {/* Status icon */}
                                <div
                                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${config.bg} ${config.color} font-bold text-sm`}
                                >
                                    {config.icon}
                                </div>

                                {/* Content */}
                                <div className="flex-1 pt-1">
                                    <div className="font-semibold text-gray-900 flex items-center gap-2">
                                        {step.title}
                                        {step.duration && (
                                            <span className="text-xs text-gray-500 font-normal">
                                                ({step.duration.toFixed(2)}s)
                                            </span>
                                        )}
                                    </div>

                                    {/* Details */}
                                    <ul className="mt-2 space-y-1">
                                        {step.details.map((detail, didx) => (
                                            <li
                                                key={didx}
                                                className="text-sm text-gray-600 flex items-start gap-2"
                                            >
                                                <span className="text-teal-500 mt-1">→</span>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Summary */}
            <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                        <div className="text-xs text-gray-600">Total Steps</div>
                        <div className="text-xl font-bold text-gray-900">{steps.length}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xs text-gray-600">Total Time</div>
                        <div className="text-xl font-bold text-gray-900">
                            {(steps.reduce((sum, s) => sum + (s.duration || 0), 0)).toFixed(2)}s
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-xs text-gray-600">Status</div>
                        <div className="text-xl font-bold text-green-600">✓ Complete</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReasoningTrace;
