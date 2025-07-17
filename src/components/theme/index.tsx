"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ThemeSwitcher({ className }: { className?: string }) {
	const { setTheme, theme } = useTheme();
	return (
		<Button
			variant="outline"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className={cn("h-8 w-8 rounded-full p-0", className)}
			aria-label="Trocar tema"
			data-testid={theme === "dark" ? "sun-icon" : "moon-icon"}
		>
			{theme === "dark" ? <SunIcon /> : <MoonIcon />}
		</Button>
	);
}
