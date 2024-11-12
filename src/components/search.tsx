import { SearchProps } from "../library/types";

export const Search = ({
	searchQuery,
	setSearchQuery,
	type,
}: SearchProps): JSX.Element => {
	return (
		<form className="flex items-center mb-6 px-4">
			<span>
				<img src="/assets/icon-search.svg"></img>
			</span>
			<input
				value={searchQuery || ""}
				onChange={(e) => setSearchQuery(e.target.value)}
				placeholder={
					type === "bookmarks"
						? "Search for bookmarked shows and movies"
						: type
						? `Search ${type}`
						: "Search TV shows and movies"
				}
				type="search"
				id="search"
				className="caret-Red ml-4 text-[24px] font-light w-full placeholder-White placeholder-opacity-40 text-White bg-DarkBlue border-b-LightBlue/0 border-b-[1px] focus:border-b-LightBlue focus:outline-none transition-all duration-300"></input>
		</form>
	);
};
