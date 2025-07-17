import { Mail, MapPin, Pencil, Trash, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface UserCompProps {
	user: {
		id: number;
		name: string;
		email: string;
		city: string;
	};
}

export default function UserComp({ user }: UserCompProps) {
	return (
		<div className="bg-card border border-card rounded-lg p-4 hover:shadow-md transition-shadow">
			<div className="flex md:items-center justify-between md:flex-row flex-col gap-4">
				<div className="flex-1 gap-y-4 flex flex-col">
					<span className="flex gap-2 items-center">
						<User className="size-4" />
						{user.name}
					</span>
					<span className="flex gap-2 items-center">
						<Mail className="size-4" />
						{user.email}
					</span>
					<span className="flex gap-2 items-center">
						<MapPin className="size-4" />
						{user.city}
					</span>
				</div>
				<div className="flex items-center gap-x-2">
					<Button asChild size="icon" variant="outline">
						<Link href={`/users/${user.id}`}>
							<Pencil />
						</Link>
					</Button>
					<Button
						size="icon"
						variant="outline"
						className="border-red-500 text-red-500 hover:bg-red-100 hover:text-red-600"
					>
						<Trash />
					</Button>
				</div>
			</div>
		</div>
	);
}
