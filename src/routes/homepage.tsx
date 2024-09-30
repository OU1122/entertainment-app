import { Recommended } from "../components/recommended";
import { Search } from "../components/search";
import { Trending } from "../components/trending";
import { MovieDataProps } from "../library/types";

export const Homepage: React.FC<MovieDataProps> = ({ movieData }) => {
	return (
		<div className="max-w-[1240px] mx-10">
			<Search />
			<Trending movieData={movieData} />
			<Recommended movieData={movieData} />
		</div>
	);
};
