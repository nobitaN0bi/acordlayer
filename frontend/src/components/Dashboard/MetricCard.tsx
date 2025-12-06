'use client';

import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface MetricCardProps {
    label: string;
    value: string;
    trend?: string;
    trendUp?: boolean;
    icon?: React.ReactNode;
    onClick?: () => void;
}

export const MetricCard: React.FC<MetricCardProps> = ({
    label,
    value,
    trend,
    trendUp = true,
    icon,
    onClick,
}) => {
    return (
        <div
            onClick={onClick}
            className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
        >
            {/* Background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative">
                {/* Icon */}
                {icon && (
                    <div className="text-teal-600 mb-3 opacity-80 group-hover:opacity-100 transition-opacity">
                        {icon}
                    </div>
                )}

                {/* Label */}
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    {label}
                </div>

                {/* Value */}
                <div className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                    {value}
                </div>

                {/* Trend */}
                {trend && (
                    <div
                        className={`text-sm font-semibold flex items-center gap-1 ${trendUp ? 'text-green-600' : 'text-red-600'
                            }`}
                    >
                        {trendUp ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                        {trend}
                    </div>
                )}
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-teal-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
    );
};

export default MetricCard;
