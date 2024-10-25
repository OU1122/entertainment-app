import { MovieDataProps } from "../library/types";
import { RecommendedCard } from "./recommendedCard";

export const Recommended: React.FC<MovieDataProps> = ({ movieData }) => {
	const recommendedMovies = movieData
		? movieData.filter((movie) => !movie.is_trending)
		: [];

	return (
		<div className="w-full max-w-[1240px] pb-2 px-4">
			<h2 className="text-White text-[32px] font-light mb-6">
				Recommended for you
			</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4  justify-items-center lg:justify-items-start gap-[10px] gap-y-6">
				{recommendedMovies.map((movie, index) => (
					<RecommendedCard
						key={index}
						movie={movie}
					/>
				))}
			</div>
		</div>
	);
};
