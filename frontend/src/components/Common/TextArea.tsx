import React, { TextareaHTMLAttributes, forwardRef } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ className = '', label, error, ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {label}
                    </label>
                )}
                <textarea
                    ref={ref}
                    className={`
                        w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-lg 
                        focus:ring-2 focus:ring-teal-500 focus:border-transparent block p-2.5 
                        disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200
                        placeholder-gray-400 shadow-sm resize-y min-h-[100px]
                        ${error ? 'border-red-500 focus:ring-red-500' : 'hover:border-teal-300'}
                        ${className}
                    `}
                    {...props}
                />
                {error && (
                    <p className="mt-1.5 text-xs text-red-600 animate-fadeIn">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

TextArea.displayName = 'TextArea';
