import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { Sora } from 'next/font/google';

import { TooltipProvider } from "@/components/ui/tooltip";

const sora = Sora({
  subsets: ['latin'], // Choose the character subsets you need
  weight: ['400', '700'], // Include the font weights you need
  variable: '--font-sora', // CSS variable for custom font
});

export const metadata: Metadata = {
  title: "Kartik's Linktree",
  description: "All my links and interesting things all in one place.",
  keywords: "Kartik Mouli, portfolio, projects, links, web development",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👋</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Kartik's Linktree",
    description: "All my links and interesting things all in one place.",
    url: "https://kartiklinktree.vercel.app",
    siteName: "Kartik's Linktree",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    title: "Kartik's Linktree",
    description: "All my links and interesting things all in one place.",
    card: "summary_large_image",
    site: "@kartikmouli",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "AY_tNfWVLsBZCnrbEeAyG93iDeRouDolzW8EonaejmQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sora.className} min-h-screen antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={0}>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
