import { BookmarkSearchResultsProps } from "../library/types";
import { RecommendedCard } from "./recommendedCard";

export const BookmarkSearchResult: React.FC<BookmarkSearchResultsProps> = ({
	movieData,
	searchQuery,
	bookmarks,
}) => {
	let searchResults = movieData.filter((data) => data.is_bookmarked);
	console.log(bookmarks);
	if (searchQuery) {
		searchResults = searchResults.filter((data) =>
			data.title.toLowerCase().includes(searchQuery.toLowerCase())
		);
	}

	return (
		<div className="w-full max-w-[1240px] pb-2 px-4">
			{searchResults.length === 0 ? (
				<h2 className="text-White text-[32px] font-light mb-6">
					No results found for your search term. Please try again.
				</h2>
			) : (
				<>
					<h2 className="text-White text-[32px] font-light mb-6">
						Found {searchResults.length} results for search term: "
						{searchQuery}" in your bookmarks
					</h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4  justify-items-center lg:justify-items-start gap-[10px] gap-y-6 mb-10">
						{searchResults.map((movie, index) => (
							<RecommendedCard
								key={index}
								movie={movie}
							/>
						))}
					</div>{" "}
				</>
			)}
		</div>
	);
};
