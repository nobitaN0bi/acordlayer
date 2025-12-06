import React, { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
    helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className = '', label, error, icon, helperText, ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {label}
                    </label>
                )}
                <div className="relative">
                    {icon && (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            {icon}
                        </div>
                    )}
                    <input
                        ref={ref}
                        className={`
                            w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-lg 
                            focus:ring-2 focus:ring-teal-500 focus:border-transparent block p-2.5 
                            disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200
                            placeholder-gray-400 shadow-sm
                            ${icon ? 'pl-10' : ''}
                            ${error ? 'border-red-500 focus:ring-red-500' : 'hover:border-teal-300'}
                            ${className}
                        `}
                        {...props}
                    />
                </div>
                {helperText && !error && (
                    <p className="mt-1.5 text-xs text-gray-500">{helperText}</p>
                )}
                {error && (
                    <p className="mt-1.5 text-xs text-red-600 animate-fadeIn">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
