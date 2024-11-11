import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosDelete, axiosPost } from "../library/axiosFetch";

export const useBookmarkMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (params: { userId: string; mediaId: number }) =>
			axiosPost(params.userId, params.mediaId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
		},
	});
};
export const useDeleteBookmarkMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: ({ bookmarkId }: { bookmarkId: number | string }) =>
			axiosDelete({ bookmarkId }),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
		},
		onError: (error) => {
			console.error("Error deleting bookmark:", error);
		},
	});
};
