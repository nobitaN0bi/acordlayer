import React, { SelectHTMLAttributes, forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ className = '', label, error, options, ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {label}
                    </label>
                )}
                <div className="relative">
                    <select
                        ref={ref}
                        className={`
                            w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-lg 
                            focus:ring-2 focus:ring-teal-500 focus:border-transparent block p-2.5 pr-10
                            disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200
                            appearance-none shadow-sm cursor-pointer
                            ${error ? 'border-red-500 focus:ring-red-500' : 'hover:border-teal-300'}
                            ${className}
                        `}
                        {...props}
                    >
                        {options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        <ChevronDown size={16} />
                    </div>
                </div>
                {error && (
                    <p className="mt-1.5 text-xs text-red-600 animate-fadeIn">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Select.displayName = 'Select';
