"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { AlertCircle } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { UserApiProps } from "@/types/users";
import { formUserSchema } from "../schema";
import { UserProps } from "../../types";

export function UserForm({ id }: { id: number }) {
	const form = useForm<z.infer<typeof formUserSchema>>({
		resolver: zodResolver(formUserSchema),
		defaultValues: {
			name: "",
			email: "",
			address: {
				city: "",
			},
		},
	});
	const queryClient = useQueryClient();

	const users = queryClient.getQueryData<UserApiProps[]>(["get-user"]);
	const user = users?.find((user) => user.id === id);

	function onSubmit(values: z.infer<typeof formUserSchema>) {
		queryClient.setQueryData<UserProps[]>(["get-user"], (oldUsers) => {
			if (!oldUsers) return [];
			if (id) {
				return oldUsers.map((user) =>
					user.id === id ? { ...user, ...values } : user,
				);
			} else {
				return [
					...oldUsers,
					{ id: oldUsers[oldUsers.length - 1].id + 1, ...values },
				];
			}
		});
		form.reset();
		console.log(values);
	}

	useEffect(() => {
		if (user) {
			form.setValue("name", user.name);
			form.setValue("email", user.email);
			form.setValue("address", user.address);
		}
	}, [user, form]);

	if (!user && id) {
		return (
			<Alert variant="destructive">
				<AlertCircle />
				<AlertTitle>Erro ao buscar usuário.</AlertTitle>
				<AlertDescription>
					<p>Por favor, verifique sua conexão e tente novamente.</p>
					<ul className="list-inside list-disc text-sm">
						<li>Verifique se não está com VPN ativa</li>
						<li>Veja se não é problema com DNS</li>
						<li>Volte a página e clique em editar novamente</li>
					</ul>
				</AlertDescription>
			</Alert>
		);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-y-8"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nome</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="address.city"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Cidade</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-fit">
					Salvar
				</Button>
			</form>
		</Form>
	);
}
