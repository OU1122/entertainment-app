import { MovieDataProps } from "../library/types";
import { TrendingCard } from "./trendingCard";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Trending: React.FC<MovieDataProps> = ({ movieData }) => {
	const swiperElRef = useRef(null);
	const trendingMovies = movieData.filter((movie) => movie.isTrending);

	return (
		<div className="w-full overflow-x-scroll pb-2 mb-10 no-scrollbar">
			<h2 className="text-White text-[32px] font-light mb-6">Trending</h2>
			<Swiper
				ref={swiperElRef}
				spaceBetween={38}
				slidesPerView={2.5}
				navigation={false}
				pagination={false}
				breakpoints={{
					768: {
						slidesPerView: 2.5, // Show 2 slides for screen widths >= 768px
						spaceBetween: 30,
					},
					1024: {
						slidesPerView: 2.5, // Show 3 slides for screen widths >= 1024px
						spaceBetween: 40,
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
	);
};
