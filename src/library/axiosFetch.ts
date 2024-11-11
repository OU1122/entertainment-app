import { User } from "@supabase/supabase-js";
import axios from "axios";

export const axiosFetchBookmarks = async (url: string, user: User | null) => {
	const headers = user ? { Authorization: `Bearer ${user.id}` } : {};
	const response = await axios.get(url, { headers });
	return response.data;
};

export const axiosFetch = async (url: string) => {
	const response = await axios.get(url);
	return response.data;
};

export const axiosPost = async (userId: string, mediaId: number) => {
	try {
		const response = await axios.post("http://localhost:3000/api/bookmarks", {
			user_id: userId,
			media_id: mediaId,
		});
	} catch (error) {
		console.error(error);
	}
};

export const axiosDelete = async ({
	bookmarkId,
}: {
	bookmarkId: number | string;
}) => {
	try {
		const response = await axios.delete(
			`http://localhost:3000/api/bookmarks/${bookmarkId}`
		);
	} catch (error) {
		console.error(error);
	}
};
