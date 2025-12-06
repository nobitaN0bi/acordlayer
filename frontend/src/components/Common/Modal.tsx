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

    // Check if document is defined (client-side)
    if (typeof document === 'undefined') return null;

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
                                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${action.variant === 'primary'
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
