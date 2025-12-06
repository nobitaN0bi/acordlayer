'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/Common/Button';
import {
    Plus,
    MoreHorizontal,
    Search,
    Filter,
    Play,
    TerminalSquare
} from 'lucide-react';

interface Project {
    project_name: string;
    status: string;
    location: string;
    message: string;
}

export default function DashboardPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/api/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch projects", err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="p-8 space-y-8">
            {/* Header / Toolbar */}
            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">Agents</h1>
                        <p className="text-muted-foreground mt-1">Manage and orchestrate your autonomous workforce.</p>
                    </div>
                    <Link href="/dashboard/create">
                        <Button className="gap-2">
                            <Plus size={16} />
                            Create Agent
                        </Button>
                    </Link>
                </div>

                {/* Filters Row */}
                <div className="flex items-center gap-3">
                    <div className="relative flex-1 max-w-sm">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search agents..."
                            className="w-full h-9 pl-9 pr-3 rounded-md border border-input bg-background/50 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                        />
                    </div>
                    <Button variant="outline" size="sm" className="gap-2 text-muted-foreground">
                        <Filter size={14} />
                        Filter
                    </Button>
                </div>
            </div>

            {/* Data Grid / Table */}
            <div className="border border-border rounded-lg overflow-hidden bg-card">
                <table className="w-full text-sm text-left">
                    <thead className="bg-muted/40 text-muted-foreground border-b border-border">
                        <tr>
                            <th className="h-10 px-4 font-medium w-[40px] text-center">
                                <input type="checkbox" className="rounded border-gray-300" />
                            </th>
                            <th className="h-10 px-4 font-medium">Name</th>
                            <th className="h-10 px-4 font-medium">Status</th>
                            <th className="h-10 px-4 font-medium">Model</th>
                            <th className="h-10 px-4 font-medium">Last Run</th>
                            <th className="h-10 px-4 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {loading ? (
                            Array.from({ length: 3 }).map((_, i) => (
                                <tr key={i} className="h-12">
                                    <td colSpan={6} className="px-4 text-center text-muted-foreground">Loading...</td>
                                </tr>
                            ))
                        ) : projects.length === 0 ? (
                            <tr className="h-32">
                                <td colSpan={6} className="px-4 text-center text-muted-foreground">
                                    No agents found. Create your first one.
                                </td>
                            </tr>
                        ) : (
                            projects.map((project) => (
                                <tr key={project.project_name} className="hover:bg-muted/30 group transition-colors">
                                    <td className="px-4 text-center">
                                        <input type="checkbox" className="rounded border-gray-300" />
                                    </td>
                                    <td className="px-4 font-medium text-foreground flex items-center gap-2">
                                        <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary">
                                            <TerminalSquare size={14} />
                                        </div>
                                        {project.project_name}
                                    </td>
                                    <td className="px-4">
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border">
                                            Ready
                                        </span>
                                    </td>
                                    <td className="px-4 text-muted-foreground font-mono text-xs">gemini-2.0-flash</td>
                                    <td className="px-4 text-muted-foreground">Never</td>
                                    <td className="px-4 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                                                <Play size={14} />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                                                <MoreHorizontal size={14} />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <div className="text-xs text-muted-foreground text-center">
                Showing {projects.length} agents
            </div>
        </div>
    );
}
