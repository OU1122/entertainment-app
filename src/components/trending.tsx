import { MovieDataProps } from "../library/types";
import { TrendingCard } from "./trendingCard";
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";

register();

export const Trending: React.FC<MovieDataProps> = ({ movieData }) => {
	const swiperElRef = useRef(null);
	const trendingMovies = movieData.filter((movie) => movie.isTrending);
	useEffect(() => {
		swiperElRef.current.addEventListener("swiperprogress", (e) => {
			const [swiper, progress] = e.detail;
			console.log(progress);
		});

		swiperElRef.current.addEventListener("swiperslidechange", (e) => {
			console.log("slide changed");
		});
	}, []);
	return (
		<div className="w-full overflow-x-scroll pb-2 mb-10 no-scrollbar">
			<h2 className="text-White text-[32px] font-light mb-6">Trending</h2>
			<swiper-container
				ref={swiperElRef}
				slides-per-view="2.5"
				space-between="38"
				navigation="false"
				pagination="false">
				{trendingMovies.map((movie, index) => (
					<swiper-slide>
						<TrendingCard
							key={index}
							movie={movie}
						/>
					</swiper-slide>
				))}
			</swiper-container>

			{/* <div className="flex  max-w-full gap-[38px]">
				{trendingMovies.map((movie, index) => (
					<TrendingCard
						key={index}
						movie={movie}
					/>
				))}
			</div> */}
		</div>
	);
};
