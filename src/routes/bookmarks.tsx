import { useState } from "react";
import { Search } from "../components/search";

import { BookmarksProps } from "../library/types";
import { BookmarksComponent } from "../components/bookmarks";
import { BookmarkSearchResult } from "../components/bookmarkSearchResult";

export const Bookmarks: React.FC<BookmarksProps> = ({ bookmarks }) => {
	const [searchQuery, setSearchQuery] = useState<string | null>(null);
	
	return (
		<div className="max-w-[1240px] mx-10 mb-10 w-full overflow-hidden">
			<Search
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				type="bookmarks"
			/>
			{searchQuery ? (
				<BookmarkSearchResult
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
