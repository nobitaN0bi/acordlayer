'use client';

import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'success' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

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
        const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

        const variants = {
            primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            outline: "border border-input hover:bg-accent hover:text-accent-foreground bg-background",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            danger: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            link: "text-primary underline-offset-4 hover:underline",
            success: "bg-green-600 text-white hover:bg-green-700",
        };

        const sizes = {
            sm: "h-8 px-3 text-xs",
            md: "h-9 px-4 py-2",
            lg: "h-10 px-8",
            icon: "h-9 w-9",
        };

        return (
            <button
                ref={ref}
                className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''
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
