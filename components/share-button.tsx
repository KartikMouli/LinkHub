"use client";

import { Check, Link } from "lucide-react";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface ShareButtonProps {
    url: string;
    isCopied: boolean;
    onCopy: () => void;
}

export function ShareButton({ url, isCopied, onCopy }: ShareButtonProps) {
    return isCopied ? (
        <div className="flex flex-col items-center text-green-500">
            <Check className="h-6 w-6 sm:h-7 sm:w-7" />
            <span className="text-xs sm:text-sm mt-1">Copied</span>
        </div>
    ) : (
        <CopyToClipboard text={url} onCopy={onCopy}>
            <button className="flex flex-col items-center hover:text-primary transition-colors">
                <Link className="h-6 w-6 sm:h-7 sm:w-7" />
                <span className="text-xs sm:text-sm mt-1">Share</span>
            </button>
        </CopyToClipboard>
    );
}