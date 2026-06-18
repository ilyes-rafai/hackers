import React from "react";

export default function Text({ children, className }) {
        return (
                <p className={`w-full font-semibold text-balance text-neutral-700 dark:text-neutral-400 ${className}`}>
                        {children}
                </p>
        );
}
