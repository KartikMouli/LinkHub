import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Link as LinkIcon } from 'lucide-react';
import { useLinksStore } from '@/store/uselinkstore';


export const AddLinkForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const { addLink } = useLinksStore();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title && url) {
            addLink(title, url);
            setTitle('');
            setUrl('');
        }
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="mb-8 space-y-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
        >
            <div className="flex items-center space-x-2 mb-4">
                <LinkIcon className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Add New Link</h2>
            </div>
            <div>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Link Title"
                    className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    required
                />
            </div>
            <div>
                <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="URL (https://...)"
                    className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    required
                />
            </div>
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 text-white p-3 rounded-lg hover:from-blue-600 hover:to-purple-600 dark:hover:from-blue-500 dark:hover:to-purple-500 transition-all duration-300 flex items-center justify-center space-x-2 shadow-md"
            >
                <Plus className="w-5 h-5" />
                <span>Add Link</span>
            </motion.button>
        </motion.form>
    );
};