import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet";
import ThemeSwitcher from "../theme";

const Navbar = () => {
	return (
		<header>
			<nav className="p-4 hidden lg:flex">
				<div className="container mx-auto flex items-center justify-between">
					<div className="font-bold text-xl">Gerenciador de usuários</div>
					<div className="flex items-center space-x-4">
						<Link
							href="/"
							className="hover:text-primary transition-all duration-200 ease-in"
						>
							Início
						</Link>
						<Link
							href="/users"
							className="hover:text-primary transition-all duration-200 ease-in"
						>
							Usuários
						</Link>
						<ThemeSwitcher />
						<Button variant="outline" className="rounded-full" asChild>
							<Link
								href="http://github.com/levigleik/front-end-technical-test-july-2025"
								target="_blank"
								rel="noopener noreferrer"
							>
								Github{" "}
								<svg
									role="img"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="dark:fill-white fill-black"
								>
									<title>GitHub</title>
									<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
								</svg>
							</Link>
						</Button>
					</div>
				</div>
			</nav>
			<div className="block lg:hidden p-4">
				<div className="flex items-center justify-between">
					<div className="font-bold text-xl">Gerenciador de usuários</div>
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="outline" size="icon">
								<Menu className="size-4" />
							</Button>
						</SheetTrigger>
						<SheetContent className="overflow-y-auto">
							<SheetHeader></SheetHeader>
							<div className="flex flex-col gap-6 p-4">
								<Link href="/">Início</Link>
								<Link href="/users">Usuários</Link>
								<div className="flex gap-3">
									<ThemeSwitcher />
									<Button variant="outline" className="rounded-full" asChild>
										<Link
											href="http://github.com/levigleik/front-end-technical-test-july-2025"
											target="_blank"
											rel="noopener noreferrer"
										>
											Github{" "}
											<svg
												role="img"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
												className="dark:fill-white fill-black"
											>
												<title>GitHub</title>
												<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
											</svg>
										</Link>
									</Button>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
