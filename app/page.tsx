"use client"

import { motion } from "framer-motion";
import { LinkIcon } from "lucide-react";
import { LinkCard } from "./components/link-card";
import { ThemeToggle } from "./components/theme-toggle";
import { heading, name, socialLinks } from "@/constants/social-links";



export default function Home() {

  const links = socialLinks;

  return (
    <div className="min-h-screen  bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <ThemeToggle />
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r rounded-full from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400  shadow-lg">
              <LinkIcon className="w-14 h-14 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{name}</h1>
          <p className="text-gray-600 dark:text-gray-300">{heading}</p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-3"
        >
          {links.map((link, index) => (
            <LinkCard key={index} link={link} />
          ))}
        </motion.div>
      </div>
      {/* <VercelAnalytics /> */}
    </div>
  );
}
