'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutGrid,
    PlusCircle,
    Settings,
    Users,
    BarChart3,
    Zap,
    LogOut,
    ChevronDown
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, href, active, onClick }: any) => {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`
        flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 group
        ${active
                    ? 'bg-secondary text-primary'
                    : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
                }
      `}
        >
            <Icon size={18} className={active ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'} />
            {label}
        </Link>
    );
};

export const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="w-64 h-screen border-r border-border bg-card flex flex-col sticky top-0 left-0">
            {/* Header */}
            <div className="p-4 border-b border-border flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Zap size={18} className="text-primary-foreground fill-current" />
                </div>
                <div>
                    <span className="font-semibold text-sm block leading-tight">Acordlayer</span>
                    <span className="text-xs text-muted-foreground">Enterprise OS</span>
                </div>
            </div>

            {/* Workspace Selector Mockup */}
            <div className="p-4 pb-2">
                <button className="w-full flex items-center justify-between px-3 py-2 bg-secondary/50 rounded-md border border-border/50 text-sm hover:bg-secondary transition-colors">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500"></div>
                        <span className="font-medium">Acme Corp</span>
                    </div>
                    <ChevronDown size={14} className="text-muted-foreground" />
                </button>
            </div>

            {/* Navigation */}
            <div className="flex-1 px-2 py-4 space-y-1">
                <div className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Platform</div>
                <SidebarItem
                    icon={LayoutGrid}
                    label="Dashboard"
                    href="/dashboard"
                    active={pathname === '/dashboard'}
                />
                <SidebarItem
                    icon={Users}
                    label="Agents"
                    href="/dashboard/agents"
                    active={pathname.includes('/dashboard/agents')}
                />
                <SidebarItem
                    icon={PlusCircle}
                    label="Create Agent"
                    href="/dashboard/create"
                    active={pathname.includes('/dashboard/create')}
                />
                <SidebarItem
                    icon={BarChart3}
                    label="Analytics"
                    href="/dashboard/analytics"
                    active={pathname.includes('/dashboard/analytics')}
                />

                <div className="px-3 mt-8 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Settings</div>
                <SidebarItem
                    icon={Settings}
                    label="Configuration"
                    href="/dashboard/settings"
                    active={pathname.includes('/dashboard/settings')}
                />
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-border">
                <div className="flex items-center gap-3 px-2 py-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    <div className="flex-1">
                        <div className="text-sm font-medium">Nobita</div>
                        <div className="text-xs text-muted-foreground">Pro Plan</div>
                    </div>
                    <LogOut size={16} className="text-muted-foreground cursor-pointer hover:text-foreground" />
                </div>
            </div>
        </div>
    );
};
