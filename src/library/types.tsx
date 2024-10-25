import { Dispatch, SetStateAction } from "react";

export type SearchProps = {
	searchQuery: string | null;
	setSearchQuery: Dispatch<SetStateAction<string | null>>;
	type?: "movies" | "TV series" | "bookmarks";
};

export interface SearchResultsProps extends SearchProps {
	movieData: Movie[];
}

export interface Movie {
	title: string;
	thumbnail: {
		trending?: {
			small: string;
			large: string;
		};
		regular: {
			small: string;
			medium: string;
			large: string;
		};
	};
	year: number;
	category: string;
	rating: string;
	is_trending: boolean;
	is_bookmarked: boolean;
}

export interface MovieDataProps {
	movieData: Movie[];
}
export interface CollectionComponentProps extends MovieDataProps {
	type: string;
}

export interface TrendingCardProps {
	movie: Movie;
}

export interface RecommendedProps {
	movie: Movie;
}

export interface RecommendedCardProps {
	movie: Movie;
}
