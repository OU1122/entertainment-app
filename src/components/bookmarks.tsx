import { CollectionComponentProps } from "../library/types";
import { RecommendedCard } from "./recommendedCard";

export const BookmarksComponent: React.FC<CollectionComponentProps> = ({
	movieData,
}) => {
	const bookmarkedMovies = movieData.filter(
		(data) => data.category === "Movie" && data.is_bookmarked === true
	);
	const bookmarkedShows = movieData.filter(
		(data) => data.category === "TV Series" && data.is_bookmarked === true
	);

	return (
		<div className="w-full max-w-[1240px] pb-2 px-4">
			<h2 className="text-White text-[32px] font-light mb-6">
				Bookmarked Movies
			</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4  justify-items-center lg:justify-items-start gap-[10px] gap-y-6 mb-10">
				{bookmarkedMovies.map((movie, index) => (
					<RecommendedCard
						key={index}
						movie={movie}
					/>
				))}
			</div>
			<h2 className="text-White text-[32px] font-light mb-6">
				Bookmarked TV Series
			</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4  justify-items-center lg:justify-items-start gap-[10px] gap-y-6">
				{bookmarkedShows.map((movie, index) => (
					<RecommendedCard
						key={index}
						movie={movie}
					/>
				))}
			</div>
		</div>
	);
};
