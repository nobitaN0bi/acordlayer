'use client';

import React, { use } from 'react';
import { ReasoningTrace } from '@/components/Agents/ReasoningTrace';
import { Button } from '@/components/Common/Button';
import Link from 'next/link';

export default function AgentDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    // Mock data for the reasoning trace
    const mockSteps = [
        {
            step: 1,
            title: 'Analyze User Request',
            status: 'complete' as const,
            details: ['Identified intent: Lead Qualification', 'Extracted entities: Company Name, Industry'],
            duration: 0.45,
        },
        {
            step: 2,
            title: 'Search Company Database',
            status: 'complete' as const,
            details: ['Querying CRM...', 'Found match: Acme Corp'],
            duration: 1.2,
        },
        {
            step: 3,
            title: 'Enrich Data',
            status: 'processing' as const,
            details: ['Fetching revenue data', 'Checking recent news'],
            duration: 2.5,
        },
        {
            step: 4,
            title: 'Generate Score',
            status: 'pending' as const,
            details: ['Calculating fit score based on ICP'],
        },
    ];

    return (
        <div className="p-8 min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <Link href="/dashboard" className="text-sm text-gray-500 hover:text-teal-600 mb-2 inline-block">
                            ← Back to Dashboard
                        </Link>
                        <h1 className="text-h1 text-gray-900 capitalize">Agent: {id}</h1>
                        <p className="text-body mt-1">Live reasoning trace and activity log.</p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline">View Logs</Button>
                        <Button variant="danger">Stop Agent</Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {/* Live Trace */}
                    <ReasoningTrace steps={mockSteps} isLive={true} />
                </div>
            </div>
        </div>
    );
}
