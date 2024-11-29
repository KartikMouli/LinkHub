"use client"

import { motion } from "framer-motion";
import { LinkIcon } from "lucide-react";

import { LinkCard } from "./components/link-card";
import { AdminPanel } from "./components/adminpanel";
import { ThemeToggle } from "./components/theme-toggle";
import { useLinksStore } from "@/store/uselinkstore";
import { useEffect } from "react";
import { AddLinkForm } from "./components/addlinkform";


export default function Home() {

  const links = useLinksStore((state) => state.links);
  const { fetchLinks } = useLinksStore();

  const user = {
    isAdmin: true,
  }

  useEffect(() => {
    fetchLinks();
  }, [])


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <ThemeToggle />
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex justify-center mb-6"
          >
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-2xl shadow-lg">
              <LinkIcon className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Your LinkTree</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Share your links with the world</p>
        </motion.div>

        <AdminPanel />
        {user?.isAdmin && <AddLinkForm />}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-3"
        >
          {links.map((link) => (
            <LinkCard key={link.id} link={link} />
          ))}
        </motion.div>
      </div>
      {/* <VercelAnalytics /> */}
    </div>
  );
}
