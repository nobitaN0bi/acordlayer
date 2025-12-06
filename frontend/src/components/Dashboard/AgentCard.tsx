'use client';

import React from 'react';
import { Button } from '@/components/Common/Button';
import Link from 'next/link';
import { Activity, CheckCircle, XCircle, Clock, Zap } from 'lucide-react';

interface AgentCardProps {
    id: string;
    name: string;
    role: string;
    tasksCompleted: number;
    performance: number;
    status: 'online' | 'offline' | 'error' | 'processing';
}

export const AgentCard: React.FC<AgentCardProps> = ({
    id,
    name,
    role,
    tasksCompleted,
    performance,
    status,
}) => {
    const statusConfig = {
        online: { color: 'bg-green-500', text: 'text-green-600', label: 'Online', icon: <CheckCircle size={14} /> },
        offline: { color: 'bg-gray-400', text: 'text-gray-500', label: 'Offline', icon: <XCircle size={14} /> },
        error: { color: 'bg-red-500', text: 'text-red-600', label: 'Error', icon: <XCircle size={14} /> },
        processing: { color: 'bg-blue-500', text: 'text-blue-600', label: 'Processing', icon: <Clock size={14} /> },
    };

    const config = statusConfig[status];

    return (
        <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center text-lg font-bold text-teal-700">
                        {name.charAt(0)}
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">{name}</h3>
                        <p className="text-xs text-gray-500">{role}</p>
                    </div>
                </div>
                <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${config.text} bg-opacity-10 border-opacity-20`}>
                    {config.icon}
                    {config.label}
                </div>
            </div>

            <div className="space-y-4 mb-6 flex-grow">
                <div>
                    <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-gray-500">Performance</span>
                        <span className="font-semibold text-gray-900">{performance}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div
                            className="bg-teal-500 h-2 rounded-full transition-all duration-500 group-hover:bg-teal-400"
                            style={{ width: `${performance}%` }}
                        ></div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                        <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                            <Zap size={12} /> Tasks
                        </div>
                        <div className="font-semibold text-gray-900">{tasksCompleted}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                        <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                            <Activity size={12} /> Uptime
                        </div>
                        <div className="font-semibold text-gray-900">99.9%</div>
                    </div>
                </div>
            </div>

            <Link href={`/dashboard/agents/${id}`} className="block mt-auto">
                <Button variant="outline" fullWidth size="sm" className="group-hover:border-teal-200 group-hover:text-teal-700">
                    View Details
                </Button>
            </Link>
        </div>
    );
};

export default AgentCard;
