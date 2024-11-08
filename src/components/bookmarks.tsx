import { useAuth } from "../library/authProvider";
import { CollectionComponentProps } from "../library/types";
import { RecommendedCard } from "./recommendedCard";

export const BookmarksComponent: React.FC<CollectionComponentProps> = ({
	movieData,
	bookmarks,
}) => {
	const { user } = useAuth();

	const bookmarkedMovies = movieData.filter(
		(movie) =>
			movie.category === "Movie" &&
			bookmarks?.some((bookmark) => bookmark.media_id === movie.id)
	);

	const bookmarkedShows = movieData.filter(
		(data) =>
			data.category === "TV Series" &&
			bookmarks?.some((bookmark) => bookmark.media_id === data.id)
	);

	console.log(bookmarks);

	return (
		<div className="w-full max-w-[1240px] pb-2 px-4">
			<h2 className="text-White text-[32px] font-light mb-6">
				Bookmarked Movies
			</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4  justify-items-center lg:justify-items-start gap-[10px] gap-y-6 mb-10">
				{bookmarkedMovies.length > 0 ? (
					bookmarkedMovies.map((movie, index) => (
						<RecommendedCard
							key={index}
							movie={movie}
						/>
					))
				) : (
					<p className="text-White text-[20px] font-light">
						Your bookmarked movies will show here
					</p>
				)}
			</div>
			<h2 className="text-White text-[32px] font-light mb-6">
				Bookmarked TV Series
			</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4  justify-items-center lg:justify-items-start gap-[10px] gap-y-6">
				{bookmarkedShows.length > 0 ? (
					bookmarkedShows.map((movie, index) => (
						<RecommendedCard
							key={index}
							movie={movie}
						/>
					))
				) : (
					<p className="text-White text-[20px] font-light">
						Your bookmarked TV series will show here
					</p>
				)}
			</div>
		</div>
	);
};
