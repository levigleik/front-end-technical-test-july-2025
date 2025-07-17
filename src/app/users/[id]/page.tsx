import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserForm } from "./components/UserForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function UserFormPage({
	params,
}: {
	params: { id: string };
}) {
	const { id } = await params;
	return (
		<Card className="container mx-auto py-12">
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
	);
}
