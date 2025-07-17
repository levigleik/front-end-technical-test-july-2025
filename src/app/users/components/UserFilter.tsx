"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { Filter, History } from "lucide-react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SearchUserSchema } from "../schema";
import { useState } from "react";

export default function UserFilter() {
	const form = useForm<z.infer<typeof SearchUserSchema>>({
		resolver: zodResolver(SearchUserSchema),
		defaultValues: {
			name: "",
		},
	});

	const [modalOpen, setModalOpen] = useState(false);

	const handleOpenChange = () => {
		setModalOpen((open) => !open);
	};

	const queryClient = useQueryClient();

	function resetModifications() {
		form.reset();
		queryClient.invalidateQueries({ queryKey: ["get-user"] });
		setModalOpen(false);
	}

	function onSubmit(data: z.infer<typeof SearchUserSchema>) {
		alert(`Searching for user: ${data.name}`);
	}

	return (
		<div className="flex items-center gap-x-4">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex w-full max-w-sm items-center gap-2"
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder="Filtrar usuários..." {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						type="submit"
						variant="outline"
						size="icon"
						className="rounded-full"
						onClick={() => alert("Filter clicked")}
					>
						<Filter className="size-4" />
					</Button>
					<Dialog open={modalOpen} onOpenChange={handleOpenChange}>
						<DialogTrigger asChild>
							<Button
								type="button"
								variant="outline"
								size="icon"
								className="rounded-full"
							>
								<History className="size-4" />
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Invalidar modificações</DialogTitle>
								<DialogDescription>
									Isso excluirá permanentemente suas modificações e não poderá
									ser desfeito. Tem certeza que deseja continuar?
								</DialogDescription>
							</DialogHeader>
							<DialogFooter>
								<Button
									type="button"
									variant="outline"
									onClick={handleOpenChange}
								>
									Cancelar
								</Button>
								<Button type="button" onClick={resetModifications}>
									Confirmar
								</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</form>
			</Form>
		</div>
	);
}
