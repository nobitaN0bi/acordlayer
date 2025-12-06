'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartCardProps {
    title: string;
    data: Array<{ date: string; value: number }>;
    metric: string;
    trend?: number;
}

export const ChartCard: React.FC<ChartCardProps> = ({
    title,
    data,
    metric,
    trend,
}) => {
    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{metric}</p>
                </div>
                {trend !== undefined && (
                    <div
                        className={`text-right ${trend > 0 ? 'text-green-600' : 'text-red-600'
                            }`}
                    >
                        <div className="text-2xl font-bold">
                            {trend > 0 ? '+' : ''}{trend}%
                        </div>
                        <div className="text-xs font-semibold">vs last period</div>
                    </div>
                )}
            </div>

            {/* Chart */}
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="date" stroke="#9ca3af" style={{ fontSize: '12px' }} />
                        <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'white',
                                border: '1px solid #e5e7eb',
                                borderRadius: '8px',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#2d8a88"
                            strokeWidth={2}
                            dot={{ fill: '#2d8a88', r: 4 }}
                            activeDot={{ r: 6 }}
                            isAnimationActive={true}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ChartCard;
