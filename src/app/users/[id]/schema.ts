import z from "zod";

const AddressSchema = z.object({
	city: z.string().min(2, "Nome deve ter pelo menos 2 caracteres."),
});

export const formUserSchema = z.object({
	name: z.string().min(2, {
		message: "Nome deve ter pelo menos 2 caracteres.",
	}),
	email: z.email({
		message: "Email inválido.",
	}),
	address: AddressSchema,
});
