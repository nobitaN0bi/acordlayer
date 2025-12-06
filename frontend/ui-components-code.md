# 🎨 UI COMPONENTS - COPY & PASTE READY CODE

## Production-Ready React Components for 1000X Frontend

---

## COMPONENT 1: Hero Section (Landing Page)

**File:** `src/components/Landing/HeroSection.tsx`

```tsx
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
```

---

## COMPONENT 2: Metrics Cards

**File:** `src/components/Dashboard/MetricCard.tsx`

```tsx
'use client';

import React from 'react';

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
          <div className="text-3xl mb-3 opacity-60 group-hover:opacity-100 transition-opacity">
            {icon}
          </div>
        )}

        {/* Label */}
        <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
          {label}
        </div>

        {/* Value */}
        <div className="text-3xl font-bold text-gray-900 mb-2">
          {value}
        </div>

        {/* Trend */}
        {trend && (
          <div
            className={`text-sm font-semibold flex items-center gap-1 ${
              trendUp ? 'text-green-600' : 'text-red-600'
            }`}
          >
            <span className="text-lg">{trendUp ? '↑' : '↓'}</span>
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
```

---

## COMPONENT 3: Agent Card (Grid Item)

**File:** `src/components/Dashboard/AgentCard.tsx`

```tsx
'use client';

import React from 'react';
import Link from 'next/link';

interface AgentCardProps {
  id: string;
  name: string;
  role: string;
  tasksCompleted: number;
  performance: number;
  status: 'online' | 'offline' | 'error';
  lastUpdated?: string;
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
    online: { color: 'bg-green-500', label: 'Online', icon: '✓' },
    offline: { color: 'bg-gray-400', label: 'Offline', icon: '◯' },
    error: { color: 'bg-red-500', label: 'Error', icon: '✕' },
  };

  const config = statusConfig[status];

  return (
    <Link href={`/dashboard/agents/${id}`}>
      <div className="group relative bg-white border border-gray-200 rounded-xl p-5 hover:border-teal-400 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden h-full">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative">
          {/* Header with name and status */}
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg font-bold text-gray-900">{name}</h3>
              <p className="text-sm text-gray-600 mt-1">{role}</p>
            </div>
            <div className={`w-3 h-3 rounded-full ${config.color} flex-shrink-0 shadow-md`}></div>
          </div>

          {/* Performance Bar */}
          <div className="mt-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-gray-600">Performance</span>
              <span className="text-sm font-bold text-gray-900">{performance}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full transition-all duration-500"
                style={{ width: `${performance}%` }}
              ></div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-50 rounded-lg p-2">
              <div className="text-xs text-gray-600">Tasks</div>
              <div className="text-lg font-bold text-gray-900">{tasksCompleted}</div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-2">
              <div className="text-xs text-gray-600">Status</div>
              <div className="text-lg font-bold text-teal-600">{config.label}</div>
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full px-4 py-2 border border-teal-300 text-teal-600 rounded-lg text-sm font-semibold hover:bg-teal-50 transition-all duration-200 group-hover:border-teal-500">
            Details
          </button>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-teal-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </Link>
  );
};

export default AgentCard;
```

---

## COMPONENT 4: Live Reasoning Trace

**File:** `src/components/Agents/ReasoningTrace.tsx`

```tsx
'use client';

import React from 'react';

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
    pending: { icon: '◯', color: 'text-gray-400', bg: 'bg-gray-100' },
    processing: { icon: '⟳', color: 'text-teal-600', bg: 'bg-teal-50 animate-pulse' },
    complete: { icon: '✓', color: 'text-green-600', bg: 'bg-green-50' },
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
                  className={`absolute left-4 top-12 w-0.5 h-12 ${
                    step.status === 'complete'
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
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${config.bg} ${config.color} font-bold text-sm ${
                    step.status === 'processing' ? 'animate-spin' : ''
                  }`}
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
```

---

## COMPONENT 5: Analytics Chart

**File:** `src/components/Analytics/ChartCard.tsx`

```tsx
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
            className={`text-right ${
              trend > 0 ? 'text-green-600' : 'text-red-600'
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
```

---

## COMPONENT 6: Button Variants

**File:** `src/components/Common/Button.tsx`

```tsx
'use client';

import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'success';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      icon,
      fullWidth = false,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary:
        'bg-teal-600 text-white hover:bg-teal-700 shadow-md hover:shadow-lg active:bg-teal-800 focus:ring-2 focus:ring-teal-400',
      secondary:
        'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300 focus:ring-2 focus:ring-gray-400',
      outline:
        'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-100 focus:ring-2 focus:ring-gray-400',
      danger:
        'bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg active:bg-red-800 focus:ring-2 focus:ring-red-400',
      success:
        'bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg active:bg-green-800 focus:ring-2 focus:ring-green-400',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-2.5 text-base',
      lg: 'px-8 py-3 text-lg',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
          fullWidth ? 'w-full' : ''
        } ${className}`}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <span className="animate-spin">⟳</span>}
        {icon && !isLoading && icon}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
```

---

## COMPONENT 7: Modal/Dialog

**File:** `src/components/Common/Modal.tsx`

```tsx
'use client';

import React from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  actions?: {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
  }[];
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  actions,
}) => {
  if (!isOpen) return null;

  const sizeClass = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className={`relative bg-white rounded-xl shadow-2xl ${sizeClass[size]} w-full mx-4 animate-fadeIn`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6">{children}</div>

        {/* Footer */}
        {actions && (
          <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl">
            {actions.map((action, idx) => (
              <button
                key={idx}
                onClick={action.onClick}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  action.variant === 'primary'
                    ? 'bg-teal-600 text-white hover:bg-teal-700'
                    : action.variant === 'danger'
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
```

---

## HOW TO USE THESE COMPONENTS

```tsx
// In your app pages:

import { HeroSection } from '@/components/Landing/HeroSection';
import { MetricCard } from '@/components/Dashboard/MetricCard';
import { AgentCard } from '@/components/Dashboard/AgentCard';
import { ReasoningTrace } from '@/components/Agents/ReasoningTrace';
import { ChartCard } from '@/components/Analytics/ChartCard';
import { Button } from '@/components/Common/Button';
import { Modal } from '@/components/Common/Modal';

// Landing Page
export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* Other sections */}
    </main>
  );
}

// Dashboard
export default function Dashboard() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          label="Revenue"
          value="$125,400"
          trend="28% WoW"
          trendUp={true}
          icon="💰"
        />
        {/* More metrics */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AgentCard
          id="blake"
          name="Blake"
          role="SDR Bot"
          tasksCompleted={847}
          performance={94}
          status="online"
        />
        {/* More agents */}
      </div>
    </div>
  );
}
```

---

## STYLING WITH TAILWIND

Make sure your `tailwind.config.ts` includes these utilities:

```ts
theme: {
  extend: {
    animation: {
      blob: 'blob 7s infinite',
      fadeIn: 'fadeIn 0.3s ease-out',
      spin: 'spin 1s linear infinite',
    },
    keyframes: {
      blob: {
        '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
        '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
        '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
      },
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
    },
  },
}
```

---

**All components are production-ready. Copy, paste, customize, ship.**
