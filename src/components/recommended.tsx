import { MovieDataProps } from "../library/types";
import { RecommendedCard } from "./recommendedCard";

export const Recommended: React.FC<MovieDataProps> = ({ movieData }) => {
	const recommendedMovies = movieData.filter((movie) => !movie.isTrending);

	return (
		<div className="w-full max-w-[1240px] pb-2">
			<h2 className="text-White text-[32px] font-light mb-6">
				Recommended for you
			</h2>
			<div className="grid grid-cols-4  gap-[40px]">
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