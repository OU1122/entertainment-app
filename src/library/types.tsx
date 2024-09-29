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
	isBookmarked: boolean;
	isTrending: boolean;
}

export interface MovieDataProps {
	movieData: Movie[];
}

export interface TrendingCardProps {
	movie: Movie;
}
