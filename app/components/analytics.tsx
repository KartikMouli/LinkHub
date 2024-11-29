import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Award, Eye } from 'lucide-react';
import { useLinksStore } from '@/store/uselinkstore';


export const Analytics: React.FC = () => {

    const links = useLinksStore((state) => state.links);
    const totalViews = links.reduce((sum, link) => sum + link.views, 0);
    const topLink = links.length > 0
        ? links.reduce((prev, current) => prev.views > current.views ? prev : current)
        : { title: 'No links yet', views: 0 };
    const cards = [
        {
            title: 'Total Views',
            value: totalViews,
            icon: Eye,
            color: 'blue',
        },
        {
            title: 'Total Links',
            value: links.length,
            icon: TrendingUp,
            color: 'green',
        },
        {
            title: 'Top Link',
            value: topLink.title,
            subValue: topLink.views > 0 ? `${topLink.views} views` : 'No views yet',
            icon: Award,
            color: 'purple',
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8"
        >
            <div className="flex items-center space-x-2 mb-6">
                <BarChart3 className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Analytics Dashboard</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cards.map((card) => (
                    <motion.div
                        key={card.title}
                        whileHover={{ scale: 1.02 }}
                        className={`p-4 rounded-lg bg-${card.color}-50 dark:bg-${card.color}-900/20 border border-${card.color}-100 dark:border-${card.color}-700`}
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <p className={`text-sm text-${card.color}-600 dark:text-${card.color}-400`}>{card.title}</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{card.value}</p>
                                {card.subValue && (
                                    <p className={`text-sm text-${card.color}-500 dark:text-${card.color}-400 mt-1`}>
                                        {card.subValue}
                                    </p>
                                )}
                            </div>
                            <card.icon className={`w-5 h-5 text-${card.color}-500 dark:text-${card.color}-400`} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};