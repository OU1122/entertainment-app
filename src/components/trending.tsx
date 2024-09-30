import { MovieDataProps } from "../library/types";
import { TrendingCard } from "./trendingCard";

export const Trending: React.FC<MovieDataProps> = ({ movieData }) => {
	const trendingMovies = movieData.filter((movie) => movie.isTrending);

	return (
		<div className="w-full overflow-x-scroll pb-2">
			<h2 className="text-White text-[32px] font-light mb-6">Trending</h2>
			{/* Add multiple Trending Card components here */}
			<div className="flex  max-w-full gap-[38px]">
				{trendingMovies.map((movie, index) => (
					<TrendingCard
						key={index}
						movie={movie}
					/>
				))}
			</div>
		</div>
	);
};
