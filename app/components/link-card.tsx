import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from '@/types/link';
import { useLinksStore } from '@/store/uselinkstore';

import {
    Linkedin,
    Twitter,
    Mail,
    Youtube,
    Instagram,
    Github,
} from "lucide-react";


// Mapping platform names to their respective icons
const platformIcons: Record<string, React.ElementType> = {
    LinkedIn: Linkedin,
    Twitter: Twitter,
    Mail: Mail,
    Youtube: Youtube,
    Instagram: Instagram,
    Github: Github,
};


interface LinkCardProps {
    link: Link;
}

export const LinkCard: React.FC<LinkCardProps> = ({ link }) => {

    const { geoInfo, fetchGeoInfo, trackVisit, visitTracked } = useLinksStore();
    const handleLinkClick = useLinksStore(state => state.handleLinkClick)

    useEffect(() => {
        fetchGeoInfo();
    }, []);

    useEffect(() => {
        trackVisit();
    }, [geoInfo, visitTracked]);


    const onLinkClick = async () => {
        window.open(link.url)
        await handleLinkClick(link.url ?? "undefined link");
    };

    const Icon = platformIcons[link.platform] || ExternalLink;


    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex relative group"
        >
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onLinkClick}
                className="w-full p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between group-hover:bg-gray-50 dark:group-hover:bg-gray-700"
            >
                <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <Icon className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white">{link.platform}</span>
                </div>

            </motion.button>
        </motion.div>
    );
};
