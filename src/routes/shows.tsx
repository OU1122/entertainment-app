import { useState } from "react";
import { Search } from "../components/search";
import { MovieDataProps } from "../library/types";
import { SearchResult } from "../components/searchResult";
import { CollectionComponent } from "../components/collectionComponent";

export const Shows: React.FC<MovieDataProps> = ({ movieData }) => {
	const [searchQuery, setSearchQuery] = useState<string | null>(null);

	return (
		<div className="max-w-[1240px] mx-10 mb-10 w-full overflow-hidden">
			<Search
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				type="TV series"
			/>
			{searchQuery ? (
				<SearchResult
					movieData={movieData}
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
					type="TV series"
				/>
			) : (
				<>
					<CollectionComponent
						type={"TV Series"}
						movieData={movieData}
					/>
				</>
			)}
		</div>
	);
};
