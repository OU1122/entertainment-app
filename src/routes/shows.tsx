import { useState } from "react";
import { Recommended } from "../components/recommended";
import { Search } from "../components/search";
import { Trending } from "../components/trending";
import { MovieDataProps } from "../library/types";
import { SearchResult } from "../components/searchResult";

export const Shows: React.FC<MovieDataProps> = ({ movieData }) => {
	const [searchQuery, setSearchQuery] = useState<string | null>(null);

	return (
		<div className="max-w-[1240px] mx-10 mb-10 w-full">
			<Search
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
			/>
			{searchQuery ? (
				<SearchResult
					movieData={movieData}
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
				/>
			) : (
				<>
					<Trending movieData={movieData} />
					<Recommended movieData={movieData} />
				</>
			)}
		</div>
	);
};
