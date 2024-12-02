"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { Dock, DockIcon } from "./ui/dock";
import { ThemeToggle } from "./theme-toggle";
import { socialLinks } from "@/constants/social-links";

// Importing icons
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { useLinksStore } from "@/store/uselinkstore";

// Mapping platform names to their respective icons
const SocialIcon: Record<string, React.ElementType> = {
    LinkedIn: Linkedin,
    Twitter: FaXTwitter,
    Mail: Mail,
    Instagram: Instagram,
    Github: Github,
    Whatsapp: FaWhatsapp,
};

export default function Navbar() {
    const socials = socialLinks;
    const handleLinkClick = useLinksStore(state => state.handleLinkClick)

    const onLinkClick = async (url: string) => {
        window.open(url, "_blank");
        await handleLinkClick(url ?? "undefined link");
    };

    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
            <div
                className="fixed bottom-0 inset-x-0 h-16 w-full backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-black/10 bg-white/70"
            ></div>
            <Dock
                className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 transform-gpu bg-white text-black shadow-[0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-black dark:text-white dark:border dark:border-white/10 dark:shadow-[0_-20px_80px_-20px_#ffffff1f_inset]"
            >
                {socials.map(({ platform, url }) => {
                    const Icon = SocialIcon[platform]; // Dynamically get the icon based on the platform

                    return (
                        <DockIcon key={platform}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant={"ghost"}
                                        size={"icon"}

                                        className="size-12"
                                        onClick={() => onLinkClick(url)}
                                    >
                                        <Icon className="size-4 transition-all duration-300 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent >
                                    <p>{platform}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    );
                })}
                <Separator orientation="vertical" className="h-full bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-blue-500/20" />
                <DockIcon>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <ThemeToggle />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Theme</p>
                        </TooltipContent>
                    </Tooltip>
                </DockIcon>
            </Dock>
        </div>
    );
}
