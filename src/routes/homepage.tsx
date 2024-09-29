import { Search } from "../components/search";
import { Trending } from "../components/trending";
import { MovieDataProps } from "../library/types";

export const Homepage: React.FC<MovieDataProps> = ({ movieData }) => {
	return (
		<div className="w-full mx-10">
			<Search />
			<Trending movieData={movieData} />
		</div>
	);
};
