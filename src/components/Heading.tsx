import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface HeadingProps {
    size?: "sm" | "md" | "lg";
    asChild?: boolean;
    children: ReactNode;
}

export function Heading({ size = "md", asChild, children }: HeadingProps) {
    const Component = asChild ? Slot : "h2";

    return (
        <Component
            className={clsx("text-gray-100", {
                "text-lg": size === "sm",
                "text-xl": size === "md",
                "text-2xl": size === "lg",
            })}
        >
            {children}
        </Component>
    );
}
