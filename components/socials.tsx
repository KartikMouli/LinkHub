import { socialLinks } from "@/constants/social-links";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion'
import { useLinksStore } from "@/store/uselinkstore";

// Mapping platform names to their respective icons
const SocialIcon: Record<string, React.ElementType> = {
    LinkedIn: Linkedin,
    Twitter: FaXTwitter,
    Mail: Mail,
    Instagram: Instagram,
    Github: Github,
};

export default function Socials() {
    const socials = socialLinks;
    const handleLinkClick = useLinksStore(state => state.handleLinkClick);

    const onLinkClick = async (url: string) => {
        window.open(url, "_blank");
        await handleLinkClick(url ?? "undefined link");
    };

    return (
        <div className="flex justify-center space-x-6">
            {socials.map(({ platform, url }) => {
                const Icon = SocialIcon[platform];
                if (!Icon) return null; // If there's no icon for the platform, skip rendering

                return (
                    <motion.a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            onLinkClick(url); // Custom handling for click
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative flex items-center justify-center p-3 rounded-full shadow-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-200"
                    >
                        <Icon
                            className="w-4 h-4 text-gray-800 dark:text-gray-100 group-hover:text-white transition-colors duration-200"
                            aria-label={platform}
                        />
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ delay: 0.1 }}
                            className="absolute bottom-[-2rem] text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 "
                        >
                            {platform}
                        </motion.span>
                    </motion.a>
                );
            })}
        </div>
    );
}
