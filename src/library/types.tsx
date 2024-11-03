import { Dispatch, ReactNode, SetStateAction } from "react";
import { User } from "@supabase/supabase-js";

export type AuthContextType = {
	user: User | null;
	loading: boolean;
	error: string | null;
	signUp: (email: string, password: string) => Promise<void>;
	signIn: (email: string, password: string) => Promise<void>;
	signOut: () => Promise<void>;
};

export interface AuthProviderProps {
	children: ReactNode;
}

export type SearchProps = {
	searchQuery: string | null;
	setSearchQuery: Dispatch<SetStateAction<string | null>>;
	type?: "movies" | "TV series" | "bookmarks";
};

export interface BookmarkSearchResultsProps extends SearchProps {
	movieData: Movie[];
	bookmarks: Bookmark[];
}

export interface Movie {
	id: number;
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

export interface BookmarksProps {
	bookmarks: Bookmark[];
	movieData: Movie[];
}

export interface Bookmark {
	id: string;
	user_id: string;
	movie_id: number;
}

export interface MovieDataProps {
	movieData: Movie[];
}
export interface CollectionComponentProps extends MovieDataProps {
	type: string;
	bookmarks: Bookmark[] | null;
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
