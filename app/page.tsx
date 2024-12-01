"use client";

import { motion } from "framer-motion";
import { LinkCard } from "../components/link-card";
import { ThemeToggle } from "../components/theme-toggle";
import { heading, linkItems, name } from "@/constants/social-links";
import Socials from "@/components/socials";
import Image from "next/image";
import { useEffect } from "react";
import { useLinksStore } from "@/store/uselinkstore";

export default function Home() {

  const { geoInfo, fetchGeoInfo, trackVisit, visitTracked } = useLinksStore();

  useEffect(() => {
    fetchGeoInfo();
  }, []);

  useEffect(() => {
    if (geoInfo && !visitTracked) {
      trackVisit();
    }
  }, [geoInfo, visitTracked]);


  const links = linkItems;


  return (
    <div className="min-h-screen flex flex-col justify-between pt-14 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center w-full max-w-4xl mx-auto gap-8">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center w-full"
        >
          {/* Profile Picture */}
          <div className="inline-flex justify-center mb-4">
            <div className="rounded-full border border-gray-400 dark:border-blue-500 shadow-lg">
              <Image
                src="/pfp.jpg"
                alt="Profile Picture"
                height={90}
                width={90}
                className="rounded-full"
              />
            </div>
          </div>
          {/* Name and Heading */}
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            {name}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 sm:text-lg">{heading}</p>
        </motion.div>

      </div>

      {/* Links Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col items-center w-full max-w-2xl space-y-3 px-4 sm:px-0 mx-auto"
      >
        {links.map((link, index) => (
          <LinkCard key={index} link={link} />
        ))}
      </motion.div>

      {/* Socials Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="w-full max-w-4xl mx-auto mb-4"
      >
        <Socials />
      </motion.div>
    </div>
  );
}
