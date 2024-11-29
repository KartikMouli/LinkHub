"use client"

import { motion } from 'framer-motion';
import { Lock, Unlock } from 'lucide-react';
import { Analytics } from './analytics';
import { useState } from 'react';

export const AdminPanel: React.FC = () => {
  const [user, setUser] = useState(false);
  
  const toggleUserMode = () => {
   
    setUser(!user);
  };

  return (
    <div className="mb-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex justify-end mb-4"
      >
        <button
          onClick={toggleUserMode}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-300 ${user
              ? 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/30'
              : 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/30'
            }`}
        >
          {user ? (
            <>
              <Unlock className="w-4 h-4" />
              <span>Exit Admin Mode</span>
            </>
          ) : (
            <>
              <Lock className="w-4 h-4" />
              <span>Enter Admin Mode</span>
            </>
          )}
        </button>
      </motion.div>
      {user && <Analytics />}
    </div>
  );
};
