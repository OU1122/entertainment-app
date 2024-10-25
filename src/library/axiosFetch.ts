import axios from "axios";

export const axiosFetch = async (url: string) => {
	const response = await axios.get(url);
	return response.data;
};
