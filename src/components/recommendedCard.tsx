import { RecommendedCardProps } from "../library/types";

export const RecommendedCard: React.FC<RecommendedCardProps> = ({ movie }) => {
	return (
		<div className="w-[160px] h-[150px] lg:w-[220px] xl:w-[280px] lg:h-[226px]  rounded-2xl relative group/play">
			<div className="w-[160px] h-[103px] lg:w-[220px] xl:w-[280px] lg:h-[174px] relative">
				<img
					src={movie.thumbnail.regular.large}
					className="object-cover rounded-2xl w-full h-full"
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
			</div>
			<div className="text-White/75 text-xs lg:text-lg flex flex-col pt-1">
				<div className="flex flex-row items-center gap-2 text-[11px] lg:text-[15px] ">
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
					<h2 className="text-White text-[14px] lg:text-[24px] font-medium">
						{movie.title}
					</h2>
				</div>
			</div>
		</div>
	);
};
