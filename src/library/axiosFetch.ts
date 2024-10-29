import axios from "axios";

export const axiosFetch = async (url: string) => {
	const response = await axios.get(url);
	return response.data;
};
export const axiosPost = async (userId: string, movieId: number) => {
	try {
		const response = await axios.post("http://localhost:3000/api/bookmarks", {
			user_id: userId,
			movie_id: movieId,
		});

		console.log("Bookmark added:", response.data);
	} catch (error) {
		console.error(error);
	}
};
