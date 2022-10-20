import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div
            className="h-12 w-full flex items-center gap-3 rounded py-4 px-3
                        bg-gray-800 focus-within:ring-2 ring-cyan-300"
        >
            {props.children}
        </div>
    );
}

TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
    return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>;

function TextInputInput(props: TextInputInputProps) {
    return (
        <input
            {...props}
            className="bg-transparent flex-1 text-xs outline-none
                       text-gray-100  placeholder:text-gray-400"
        />
    );
}

TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
    Root: TextInputRoot,
    Icon: TextInputIcon,
    Input: TextInputInput,
};
