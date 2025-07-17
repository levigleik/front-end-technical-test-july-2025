"use client";

import { useQuery } from "@tanstack/react-query";
import { AlertCircle, Plus } from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getData } from "@/lib/functions.api";
import type { UserApiProps } from "@/types/users";
import UserComp from "./User";
import UserFilter from "./UserFilter";

export default function UserListing() {
	const {
		data: users,
		isLoading,
		isError,
	} = useQuery({
		queryFn: async () => getData<UserApiProps[]>({ url: "/users" }),
		queryKey: ["get-user"],
	});
	return (
		<>
			<div className="flex md:items-center justify-between mb-4 flex-col md:flex-row gap-4">
				<UserFilter />
				<Button variant="outline" className="rounded-full max-w-sm" asChild>
					<Link href="/users/new">
						Adicionar usuário <Plus className="size-4" />
					</Link>
				</Button>
			</div>
			<div className="flex flex-col gap-y-3">
				{isLoading && (
					<div className="bg-card border border-card rounded-lg p-4 hover:shadow-md transition-shadow">
						<div className="flex md:items-center justify-between md:flex-row flex-col gap-4">
							<div className="flex-1 gap-y-4 flex flex-col">
								<span className="flex gap-2 items-center">
									<Skeleton className="size-4 rounded-full bg-foreground" />
									<Skeleton className="h-4 w-1/3 bg-foreground" />
								</span>
								<span className="flex gap-2 items-center">
									<Skeleton className="size-4 rounded-full bg-foreground" />
									<Skeleton className="h-4 w-1/3 bg-foreground" />
								</span>
								<span className="flex gap-2 items-center">
									<Skeleton className="size-4 rounded-full bg-foreground" />
									<Skeleton className="h-4 w-1/3 bg-foreground" />
								</span>
							</div>
							<div className="flex items-center gap-x-2">
								<Skeleton className="size-8 rounded-full bg-foreground" />
								<Skeleton className="size-8 rounded-full bg-foreground" />
							</div>
						</div>
					</div>
				)}
				{isError && (
					<Alert variant="destructive">
						<AlertCircle />
						<AlertTitle>Erro ao buscar usuários.</AlertTitle>
						<AlertDescription>
							<p>Por favor, verifique sua conexão e tente novamente.</p>
							<ul className="list-inside list-disc text-sm">
								<li>Verifique se não está com VPN ativa</li>
								<li>Veja se não é problema com DNS</li>
								<li>Recarregue a página</li>
							</ul>
						</AlertDescription>
					</Alert>
				)}
				{users?.map((user) => (
					<UserComp
						key={user.id}
						user={{
							id: user.id,
							name: user.name,
							email: user.email,
							city: user.address.city,
						}}
					/>
				))}
			</div>
		</>
	);
}
