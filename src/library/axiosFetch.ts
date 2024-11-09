import axios from "axios";
import { useAuth } from "./authProvider";

export const axiosFetch = async (url: string) => {
	const { user } = useAuth();
	const headers = user ? { Authorization: `Bearer ${user.id}` } : {};
	const response = await axios.get(url, { headers });
	return response.data;
};

export const axiosPost = async (userId: string, mediaId: number) => {
	try {
		const response = await axios.post("http://localhost:3000/api/bookmarks", {
			user_id: userId,
			media_id: mediaId,
		});

		console.log("Bookmark added");
	} catch (error) {
		console.error(error);
	}
};

export const axiosDelete = async (bookmarkId: number) => {
	try {
		const response = await axios.delete(
			`http://localhost:3000/api/bookmarks/${bookmarkId}`
		);

		console.log("Bookmark deleted");
	} catch (error) {
		console.error(error);
	}
};
