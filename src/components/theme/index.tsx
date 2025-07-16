"use client";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher({ className }: { className?: string }) {
	const { setTheme, theme } = useTheme();
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button
					variant="outline"
					onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					className={cn("h-8 w-8 rounded-full p-0", className)}
					aria-label="Trocar tema"
					data-testid={theme === "dark" ? "sun-icon" : "moon-icon"}
				>
					{theme === "dark" ? <SunIcon /> : <MoonIcon />}
				</Button>
			</TooltipTrigger>
			<TooltipContent side="bottom">
				{theme === "dark"
					? "Trocar para tema claro"
					: "Trocar para tema escuro"}
			</TooltipContent>
		</Tooltip>
	);
}
