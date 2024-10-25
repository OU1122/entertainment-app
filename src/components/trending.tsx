import { MovieDataProps } from "../library/types";
import { TrendingCard } from "./trendingCard";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Trending: React.FC<MovieDataProps> = ({ movieData }) => {
	const swiperElRef = useRef(null);

	const trendingMovies = movieData
		? movieData.filter((movie) => movie.is_trending)
		: [];

	console.log(trendingMovies);
	return (
		<div className="overflow-x-scroll pb-2 mb-10 no-scrollbar px-4 max-w-[1240px] flex flex-col ">
			<h2 className="text-White text-[32px] font-light mb-6">Trending</h2>
			<div className="w-full">
				<Swiper
					ref={swiperElRef}
					slidesPerView={1.2}
					spaceBetween={5}
					navigation={false}
					pagination={false}
					breakpoints={{
						365: {
							slidesPerView: 1.6,
						},
						530: { slidesPerView: 2 },
						740: {
							slidesPerView: 2.4,
							spaceBetween: 20,
						},
						1024: {
							slidesPerView: 2.6,
							spaceBetween: 25,
						},
					}}
					onSwiper={(swiper) => {
						swiper.on("progress", (progress) => {
							console.log("Progress:", progress);
						});
						swiper.on("slideChange", () => {
							console.log("Slide changed");
						});
					}}>
					{trendingMovies.map((movie, index) => (
						<SwiperSlide key={index}>
							<TrendingCard movie={movie} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};
