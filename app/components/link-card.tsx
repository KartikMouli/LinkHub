import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Trash2 } from 'lucide-react';
import { Link } from '@/types/link';
import { useLinksStore } from '@/store/uselinkstore';

interface LinkCardProps {
    link: Link;
}

export const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
    const { removeLink, incrementViews } = useLinksStore();

    const user = {
        isAdmin: true,
    };

    const handleClick = () => {
        incrementViews(link.id);
        window.open(link.url, '_blank');
    };

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
                onClick={handleClick}
                className="w-full p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between group-hover:bg-gray-50 dark:group-hover:bg-gray-700"
            >
                <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <ExternalLink className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white">{link.title}</span>
                </div>
                <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{link.views} views</span>
                    {user?.isAdmin && (
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            onClick={() => removeLink(link.id)}
                            className="p-2 bg-red-200 rounded-full transition-all duration-300"
                        >
                            <Trash2 className="w-5 h-5 text-red-500  dark:text-red-400 " />
                        </motion.button>
                    )}
                </div>
            </motion.button>
        </motion.div>
    );
};
