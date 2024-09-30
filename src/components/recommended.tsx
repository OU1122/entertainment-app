import { MovieDataProps } from "../library/types";

export const Recommended: React.FC<MovieDataProps> = ({ movieData }) => {
	return (
		<div className="w-[240px] h-[140px] md:w-[470px] md:h-[240px] shrink-0 rounded-2xl relative ">
			<img
				src={movieData.thumbnail.trending?.large}
				className="w-full h-full object-cover rounded-2xl"
				alt={movieData.title}></img>

			<div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-DarkBlue/50 hover:bg-White flex items-center justify-center group transition-all ease-in ">
				<img
					src="./assets/icon-bookmark-empty.svg"
					alt="bookmark"
					className="filter group-hover:brightness-100 group-hover:invert transition-all ease-in"
				/>
			</div>
			<div className="absolute bottom-4 left-4 text-White/75 text-xs md:text-lg flex flex-col backdrop-blur-[1px] p-1 rounded-lg">
				<div className="flex flex-row items-center gap-2 text-[15px] "></div>
			</div>
		</div>
	);
};
