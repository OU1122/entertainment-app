import { TrendingCardProps } from "../library/types";

export const TrendingCard: React.FC<TrendingCardProps> = ({ movie }) => {
	return (
		<div className="max-w-[240px] max-h-[140px] md:max-w-[470px] md:max-h-[240px] rounded-2xl relative group/play ">
			<img
				src={movie.thumbnail.trending?.large}
				className="w-full h-full object-cover rounded-2xl"
				alt={movie.title}></img>

			<div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-DarkBlue/50 hover:bg-White flex items-center justify-center group transition-all ease-in z-10">
				<img
					src="./assets/icon-bookmark-empty.svg"
					alt="bookmark"
					className="filter group-hover:brightness-100 group-hover:invert transition-all ease-in"
				/>
			</div>

			{/* Hover EFfect Overlay*/}
			<div className="absolute inset-0 bg-DarkBlue/50 opacity-0 group-hover/play:opacity-100 rounded-2xl cursor-pointer transition-opacity duration-200">
				<div className="absolute top-1/2 left-1/2 flex items-center justify-center gap-4 -translate-x-1/2 -translate-y-1/2 bg-White/25 px-2 py-2 rounded-full">
					<img
						src="./assets/icon-play.svg"
						className=""></img>
					<span className="text-White pr-2 text-[18px]">Play</span>
				</div>
			</div>
			<div className="absolute bottom-4 left-4 text-White/75 text-xs md:text-lg flex flex-col backdrop-blur-[1px] p-1 rounded-lg">
				<div className="flex flex-row items-center gap-2 text-[15px] ">
					<div className="">
						<span>{movie.year}</span>
					</div>{" "}
					●
					<div className="flex flex-row items-center justify-center gap-2">
						<span className="flex flex-row items-center justify-center  gap-2">
							{movie.category === "Movie" ? (
								<img src="./assets/icon-category-movie.svg"></img>
							) : (
								<img src="./assets/icon-category-tv.svg"></img>
							)}
							{movie.category}
						</span>
					</div>{" "}
					●
					<div>
						<span>{movie.rating}</span>
					</div>
				</div>
				<div>
					<h2 className="text-White text-[24px] font-medium">
						{movie.title}
					</h2>
				</div>
			</div>
		</div>
	);
};
