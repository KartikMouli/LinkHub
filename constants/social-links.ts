import { LinkT } from "@/types/type";

import { Facebook, Linkedin } from 'lucide-react';
import { FaLinkedin, FaReddit, FaTelegram, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';

export const name = "@kartikmouli";
export const heading = "IITP CSE '24";

export const socialLinks = [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/kartik-mouli/" },
    { platform: "Github", url: "https://github.com/AtotheY/KartikMouli" },
    { platform: "Twitter", url: "https://x.com/kartikmouli" },
    { platform: "Mail", url: "mailto:kartikmouli156@gmail.com" },
    { platform: "Instagram", url: "https://instagram.com/KartikMouli" },
    { platform: "Whatsapp", url: "https://wa.me/919325648631" }

];


export const linkItems: LinkT[] = [
    {
        platform: "Resume",
        url: "https://drive.google.com/file/d/16ebey3K6tIWcpgVi0Gc7zI3mYVpgdHxR/view?usp=sharing",
    },
    {
        platform: "Portfolio",
        url: "https://kartikmoulidev.vercel.app/",
    },

    {

        platform: "Leetcode",
        url: "https://leetcode.com/u/monchi02/",
    },
    {

        platform: "Codeforces",
        url: "https://codeforces.com/profile/monchi_02",
    },
    {
        platform: "Letterboxd",
        url: "https://letterboxd.com/monchi02/"
    }
]



export const socialMediaPlatforms = [
    {
        name: 'Twitter',
        icon: FaXTwitter,
        url: (url: string, platform: string) =>
            `https://twitter.com/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(`kartik's ${platform} - ${url}`)}`
    },
    {
        name: 'Facebook',
        icon: Facebook,
        url: (url: string, platform: string) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(`kartik's ${platform} - ${url}`)}`
    },
    {
        name: 'LinkedIn',
        icon: FaLinkedin,
        url: (url: string, platform: string) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(`kartik's ${platform} - ${url}`)}`
    },
    {
        name: 'Reddit',
        icon: FaReddit,
        url: (url: string, platform: string) =>
            `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(`kartik's ${platform} - ${url}`)}`
    },
    {
        name: 'WhatsApp',
        icon: FaWhatsapp,
        url: (url: string, platform: string) =>
            `https://wa.me/?text=${encodeURIComponent(`kartik's ${platform} - ${url}`)}`
    },
];

