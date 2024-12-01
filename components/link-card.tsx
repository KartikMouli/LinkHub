"use client"
import React  from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from '@/types/link';
import { TbBrandLeetcode } from "react-icons/tb";
import { SiCodeforces } from "react-icons/si";
import {
    FileUser,
    FolderCode
} from "lucide-react";
import { useLinksStore } from '@/store/uselinkstore';


const Icons: Record<string, React.ElementType> = {
    Resume: FileUser,
    Portfolio: FolderCode,
    Leetcode: TbBrandLeetcode,
    Codeforces: SiCodeforces,
};


interface LinkCardProps {
    link: Link;
}

export const LinkCard: React.FC<LinkCardProps> = ({ link }) => {

    const handleLinkClick = useLinksStore(state => state.handleLinkClick)

    const onLinkClick = async () => {
        window.open(link.url)
        await handleLinkClick(link.url ?? "undefined link");
    };

    const LinkIcons = Icons[link.platform] || ExternalLink;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex w-full relative group"
        >
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onLinkClick}
                className="w-full p-3 md:p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between group-hover:bg-gray-50 dark:group-hover:bg-gray-700"
            >
                <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <LinkIcons className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white">{link.platform}</span>
                </div>

            </motion.button>
        </motion.div>
    );
};
