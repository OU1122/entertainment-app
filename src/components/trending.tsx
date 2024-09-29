import { MovieDataProps } from "../library/types";
import { TrendingCard } from "./trendingCard";

export const Trending: React.FC<MovieDataProps> = ({ movieData }) => {
	const trendingMovies = movieData.filter((movie) => movie.isTrending);

	return (
		<div className="">
			<h2 className="text-White text-[32px] font-light mb-6">Trending</h2>
			{/* Add multiple Trending Card components here */}
			<TrendingCard />
		</div>
	);
};
