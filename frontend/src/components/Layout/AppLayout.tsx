'use client';

import React from 'react';
import { Sidebar } from '@/components/Layout/Sidebar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background text-foreground font-sans">
      <Sidebar />
      <main className="flex-1 min-w-0 overflow-auto">
        <div className="h-full w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
