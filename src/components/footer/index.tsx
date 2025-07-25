export default function Footer() {
	return (
		<footer
			id="footer"
			className="bg-card shadow-sm mt-16 py-8"
		>
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<p className="text-sm text-muted-foreground">
							© 2025 Gerenciamento de usuários. Todos os direitos reservados.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
