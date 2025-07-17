import type { QueryClient } from "@tanstack/react-query";
import type z from "zod";
import type { UserProps } from "../types";
import type { formUserSchema } from "./schema";

export const updateUser = async (
	queryClient: QueryClient,
	id: number,
	values: z.infer<typeof formUserSchema>,
) =>
	queryClient.setQueryData<UserProps[]>(["get-user"], (oldUsers) => {
		if (!oldUsers) return [{ id: 1, ...values }];
		return oldUsers.map((user) =>
			user.id === id ? { ...user, ...values } : user,
		);
	});

export const createUser = async (
	queryClient: QueryClient,
	values: z.infer<typeof formUserSchema>,
) =>
	queryClient.setQueryData<UserProps[]>(["get-user"], (oldUsers) => {
		if (!oldUsers) return [{ id: 1, ...values }];
		return [
			...oldUsers,
			{ id: oldUsers[oldUsers.length - 1].id + 1, ...values },
		];
	});

export const deleteUser = async (queryClient: QueryClient, id: number) =>
	queryClient.setQueryData<UserProps[]>(["get-user"], (oldUsers) => {
		if (!oldUsers) return [];
		return oldUsers.filter((user) => user.id !== id);
	});

export const resetModifications = (queryClient: QueryClient) =>
	queryClient.invalidateQueries({ queryKey: ["get-user"] });
