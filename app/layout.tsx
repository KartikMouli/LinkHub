import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

import { Sora} from 'next/font/google';
const sora = Sora({
  subsets: ['latin'], // Choose the character subsets you need
  weight: ['400', '700'], // Include the font weights you need
  variable: '--font-sora', // CSS variable for custom font
});

export const metadata: Metadata = {
  title: "kartik's linktree",
  description:
    "All my links and interesting things all in one place.",
  keywords: "Kartik Mouli, portfolio, projects, links, web development",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👋</text></svg>",
        type: "image/svg+xml",
      },
    ],
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
