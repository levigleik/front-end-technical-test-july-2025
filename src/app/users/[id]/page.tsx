import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserForm } from "./components/UserForm";

export default async function UserFormPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	return (
		<div className="container mx-auto md:py-12 py-6">
		<Card>
			<CardHeader className="flex justify-between">
				{Number(id) ? (
					<h2 className="text-xl">Editar usuário</h2>
				) : (
					<h2 className="text-xl">Criar novo usuário</h2>
				)}
				<Button variant="outline" className="rounded-full" asChild>
					<Link href="/users">
						Voltar
						<ArrowLeft className="size-4" />
					</Link>
				</Button>
			</CardHeader>
			<CardContent className="space-y-8">
				<UserForm id={Number(id)} />
			</CardContent>
		</Card>
		</div>
	);
}
