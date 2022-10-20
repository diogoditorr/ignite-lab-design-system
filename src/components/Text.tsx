import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface TextProps {
    size?: "sm" | "md" | "lg";
    asChild?: boolean;
    children: ReactNode;
}

export function Text({ size = "md", asChild, children }: TextProps) {
    const Component = asChild ? Slot : "span";

    return (
        <Component
            className={clsx("text-gray-100", {
                "text-xs": size === "sm",
                "text-sm": size === "md",
                "text-md": size === "lg",
            })}
        >
            {children}
        </Component>
    );
}
