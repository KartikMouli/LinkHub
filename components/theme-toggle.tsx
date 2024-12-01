"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';


export const ThemeToggle: React.FC = () => {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { setTheme(resolvedTheme === "dark" ? "light" : "dark"); }}
            className="fixed top-4 right-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg"
        >
            {resolvedTheme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
                <Moon className="w-5 h-5 text-blue-500" />
            )}
        </motion.button>
    );
};