import axios from "axios";

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

		console.log("Bookmark added");
	} catch (error) {
		console.error(error);
	}
};
