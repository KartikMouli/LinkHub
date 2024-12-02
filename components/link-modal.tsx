"use client";

import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { EllipsisVertical } from "lucide-react";
import { ShareButton } from "./share-button";
import { SocialShareButtons } from "./social-share-buttons";


interface LinkModalProps {
    link: { platform: string; url: string };
}

export default function LinkModal({ link }: LinkModalProps) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <EllipsisVertical className="h-4 w-4 hover:cursor-pointer" />
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Share Link</DialogTitle>
                    <DialogDescription>
                        Share this link across your favorite platforms
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                    {/* Link Information */}
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <span className="font-medium">Platform:</span>
                            <span className="text-sm text-muted-foreground">{link.platform}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="font-medium">URL:</span>
                            <span className="text-sm text-muted-foreground truncate max-w-[200px] sm:max-w-[300px]">
                                {link.url}
                            </span>
                        </div>
                    </div>

                    {/* Share Options */}
                    <div className="flex justify-between gap-2 overflow-auto">

                        <ShareButton
                            url={link.url}
                            isCopied={isCopied}
                            onCopy={handleCopy}
                        />

                        <SocialShareButtons url={link.url} platform={link.platform} />

                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}