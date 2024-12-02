"use client";

import { socialMediaPlatforms } from "@/constants/social-links";
import Link from "next/link";


interface SocialShareButtonsProps {
    url: string;
    platform: string;
}

export function SocialShareButtons({ url, platform }: SocialShareButtonsProps) {
    return (
        <>
            {socialMediaPlatforms.map((social) => {
                const Icon = social.icon;
                return (
                    <div key={social.name} className="flex flex-col items-center">
                        <Link
                            href={social.url(url, platform)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                        </Link>
                        <span className="text-xs sm:text-sm mt-1">{social.name}</span>
                    </div>
                );
            })}
        </>
    );
}