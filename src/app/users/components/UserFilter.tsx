"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Filter, History } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
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
import { resetModifications } from "../[id]/functions";
import { SearchUserSchema } from "../schema";

interface UserFilterProps {
	onSearch: (name: string) => void;
}

export default function UserFilter({ onSearch }: UserFilterProps) {
	const queryClient = useQueryClient();
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

	const { mutateAsync: mutateResetModifications } = useMutation({
		mutationFn: async () => resetModifications(queryClient),
		onError: () => {
			toast.error("Erro ao resetar modificações. Por favor, tente novamente.");
		},
		onSuccess: () => {
			toast.success("Modificações resetadas com sucesso!");
			form.reset();
			setModalOpen(false);
		},
		mutationKey: ["reset-modifications"],
	});

	function onSubmit(data: z.infer<typeof SearchUserSchema>) {
		onSearch(data.name);
	}

	return (
		<div className="flex items-center gap-x-4">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex w-full max-w-sm items-center gap-2 justify-between"
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
								<Button
									type="button"
									onClick={() => mutateResetModifications()}
								>
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
