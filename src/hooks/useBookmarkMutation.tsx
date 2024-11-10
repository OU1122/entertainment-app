import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosPost } from "../library/axiosFetch";

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
