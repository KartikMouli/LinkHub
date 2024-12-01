"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant="ghost"
            type="button"
            size="icon"
            className="px-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <MoonIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-orange-300" />
            <SunIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-orange-300" />
        </Button>
    );
}
