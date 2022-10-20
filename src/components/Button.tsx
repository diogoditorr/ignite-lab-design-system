import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface ButtonProps {
    asChild?: boolean;
    children: ReactNode;
}

export function Button({ asChild, children }: ButtonProps) {
    const Component = asChild ? Slot : "button";

    return (
        <Component
            className={clsx(
                "w-full py-4 px-3 rounded font-semibold text-sm text-black bg-cyan-500 \
                 transition-colors hover:bg-cyan-300 focus:ring-2 focus:ring-white"
            )}
        >
            {children}
        </Component>
    );
}
