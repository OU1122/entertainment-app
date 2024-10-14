import { useState } from "react";
import { Search } from "../components/search";

import { MovieDataProps } from "../library/types";
import { SearchResult } from "../components/searchResult";
import { CollectionComponent } from "../components/collectionComponent";

export const Movies: React.FC<MovieDataProps> = ({ movieData }) => {
	const [searchQuery, setSearchQuery] = useState<string | null>(null);

	return (
		<div className="max-w-[1240px] mx-10 mb-10 w-full overflow-hidden">
			<Search
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				type="bookmarks"
			/>
			{searchQuery ? (
				<SearchResult
					movieData={movieData}
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
					type="bookmarks"
				/>
			) : (
				<>
					<CollectionComponent
						type="bookmarks"
						movieData={movieData}
					/>
				</>
			)}
		</div>
	);
};
