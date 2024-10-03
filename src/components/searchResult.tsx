import { SearchResultsProps } from "../library/types";
import { RecommendedCard } from "./recommendedCard";

export const SearchResult: React.FC<SearchResultsProps> = ({
	movieData,
	searchQuery,
}) => {
	const searchResults = movieData.filter((movie) =>
		movie.title.toLowerCase().includes(searchQuery?.toLowerCase() || "")
	);

	return (
		<div className="w-full max-w-[1240px] pb-2">
			{searchResults.length === 0 ? (
				<h2 className="text-White text-[32px] font-light mb-6">
					No results found for your search term. Please try again.
				</h2>
			) : (
				<>
					<h2 className="text-White text-[32px] font-light mb-6">
						Found {searchResults.length} results for search term:{" "}
						{searchQuery}
					</h2>
					<div className="grid grid-cols-4  gap-[40px]">
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
