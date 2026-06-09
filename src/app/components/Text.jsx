import React from "react";

export default function Text({ children, className }) {
        return <p className={`text-balance text-neutral-500 dark:text-neutral-400 ${className}`}>{children}</p>;
}
