"use client";
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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { deleteUser } from "../[id]/functions";

export default function UserDelete({ id }: { id: number }) {
	const [modalOpen, setModalOpen] = useState(false);

	const handleOpenChange = () => {
		setModalOpen((open) => !open);
	};

	const queryClient = useQueryClient();

	const { mutateAsync: mutateDeleteUser } = useMutation({
		mutationFn: async (id: number) => deleteUser(queryClient, id),
		onError: () => {
			toast.error("Erro ao excluir usuário. Por favor, tente novamente.");
		},
		onSuccess: () => {
			toast.success("Usuário excluído com sucesso!");
		},
		mutationKey: ["delete-user"],
	});

	return (
		<Dialog open={modalOpen} onOpenChange={handleOpenChange}>
			<DialogTrigger asChild>
				<Button
					size="icon"
					variant="outline"
					className="border-red-500 text-red-500 hover:bg-red-100 hover:text-red-600"
				>
					<Trash />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Deletar usuário</DialogTitle>
					<DialogDescription>
						Isso excluirá permanentemente o usuário e não poderá ser desfeito.
						Tem certeza que deseja continuar?
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<Button type="button" variant="outline" onClick={handleOpenChange}>
						Cancelar
					</Button>
					<Button type="button" onClick={() => mutateDeleteUser(id)}>
						Confirmar
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
