import { ButtonHTMLAttributes, ReactNode } from "react";

type buttonSizeTypes = "md" | "lg";
type buttonVariants = "primary" | "inverse";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: ReactNode | null;
    size?: buttonSizeTypes;
    variant?: buttonVariants;
}

export default function Button({
    className,
    children,
    icon = null,
    size = "md",
    variant = "primary",
    ...props
}: ButtonProps) {
    function computeSize(s: buttonSizeTypes): string {
        let sizeClass: string;
        if (s === "md") sizeClass = "px-4 py-1";
        else if (s === "lg") sizeClass = "px-7 py-4";
        else sizeClass = "px-4 py-1"; // Default to "md" size
        return sizeClass;
    }

    function computeVariant(v: buttonVariants): string {
        if (v === "primary") return "primary-button";
        if (v === "inverse") return "inverse-button";
        return "primary-button"; // Default to "primary" variant
    }

    return (
        <button
            className={`button ${computeVariant(variant)} ${computeSize(
                size
            )} ${className}`}
            {...props}
        >
            <span>{children}</span>
            {icon}
        </button>
    );
}
