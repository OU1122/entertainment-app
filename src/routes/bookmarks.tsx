import { useState } from "react";
import { Search } from "../components/search";

import { MovieDataProps } from "../library/types";
import { SearchResult } from "../components/searchResult";
import { BookmarksComponent } from "../components/bookmarks";

export const Bookmarks: React.FC<MovieDataProps> = ({ movieData }) => {
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
					<BookmarksComponent
						type="bookmarks"
						movieData={movieData}
					/>
				</>
			)}
		</div>
	);
};
