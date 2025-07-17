"use client";
import { Shield, Users, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<div className="container mx-auto py-12">
			<section className="max-w-3xl mx-auto text-center mb-12">
				<h2 className="text-3xl mb-4">Bem vindo ao Gerenciador de Usuários</h2>
				<p className="mb-6">
					Tudo que você precisa para gerenciar seus usuários de forma eficiente
					em um só lugar.
				</p>
			</section>
			<section className="max-w-3xl flex gap-6 lg:flex-row flex-col mx-auto">
				<Card className="flex-1/2">
					<CardHeader className="flex items-center">
						<Users className="h-8 w-8 mr-2" />
						<h3 className="text-xl font-semibold">
							Gerencie seus Usuários
						</h3>
					</CardHeader>
					<CardContent className="p-6">
						Você pode adicionar novos usuários à
						lista, modificar detalhes de usuários existentes, remover usuários
						quando necessário e redefinir todas as alterações para restaurar a
						lista de usuários ao seu estado original.
					</CardContent>
				</Card>

				<Card className="flex-1/2">
					<CardHeader className="flex items-center">
						<Shield className="h-8 w-8 mr-2" />
						<h3 className="text-xl font-semibold">
							Segurança e Controle Total
						</h3>
					</CardHeader>
					<CardContent className="p-6">
						Remova facilmente usuários que não precisam mais de acesso e
						restaure configurações anteriores quando necessário.
					</CardContent>
				</Card>
			</section>
			<section className="max-w-3xl flex gap-6 lg:flex-row flex-col mx-auto">
				<Card className="mt-12 bg-foreground text-background py-10">
					<CardHeader className="text-center">
						<h2 className="text-2xl font-semibold">
							Pronto para gerenciar usuários?
						</h2>
					</CardHeader>
					<CardContent className="text-center">
						<p className="mb-4">
							Explore as funcionalidades do nosso gerenciador de usuários e
							comece a gerenciar sua base de usuários de forma eficiente.
						</p>
						<Button
							className="rounded-full max-w-sm text-lg has-[>svg]:px-12 py-8"
							asChild
						>
							<Link href="/users">
								Começar agora <ArrowRight />
							</Link>
						</Button>
					</CardContent>
				</Card>
			</section>
		</div>
	);
}
