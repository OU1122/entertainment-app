import { useNavigate } from "react-router-dom";
import { useAuth } from "../library/authProvider";
import { RecommendedCardProps } from "../library/types";
import { useContext, useEffect, useState } from "react";
import { BookmarkContext } from "../library/bookmarkContext";

import {
	useBookmarkMutation,
	useDeleteBookmarkMutation,
} from "../hooks/useBookmarkMutation";

export const RecommendedCard: React.FC<RecommendedCardProps> = ({ movie }) => {
	const { user } = useAuth();
	const navigate = useNavigate();
	const bookmarks = useContext(BookmarkContext);
	const [isFavourite, setIsFavourite] = useState(false);
	const [toggleEffect, setToggleEffect] = useState(false);

	const { mutate: addBookmark } = useBookmarkMutation();
	const { mutate: deleteBookmark } = useDeleteBookmarkMutation();

	useEffect(() => {
		if (!bookmarks) return;

		const isBookmarked = bookmarks.some(
			(bookmark) => bookmark.media_id === movie.id
		);

		setIsFavourite(isBookmarked);
	}, [bookmarks]);

	const toggleBookmark = () => {
		if (!user) {
			navigate("/login");
			return;
		}

		const bookmark = bookmarks?.find((b) => b.media_id === movie.id);
		console.log(bookmark);

		if (bookmark) {
			deleteBookmark(
				{ bookmarkId: bookmark.id },
				{
					onError: (error) => {
						console.error("Error removing bookmark:", error);
					},
				}
			);
		} else {
			addBookmark(
				{ userId: user.id, mediaId: movie.id },
				{
					onError: (error) => {
						console.error("Error adding bookmark:", error);
					},
				}
			);
		}
		setToggleEffect(true);
		setTimeout(() => setToggleEffect(false), 300);
		setIsFavourite(!isFavourite);
	};

	return (
		<div className="max-w-[160px] max-h-[150px] lg:max-w-[220px] xl:max-w-[280px] lg:max-h-[246px]  rounded-2xl relative group/play">
			<div className="max-w-[160px] max-h-[103px] lg:max-w-[220px] xl:max-w-[280px] lg:max-h-full relative ">
				<img
					src={movie.thumbnail.regular.large}
					className="object-cover rounded-2xl w-full h-full"
					alt={movie.title}></img>
				{isFavourite ? (
					<div
						onClick={toggleBookmark}
						className={`${
							toggleEffect ? "custom-bounce" : ""
						} absolute top-4 right-4 h-8 w-8 rounded-full bg-White/70 hover:bg-White flex items-center justify-center group transition-all ease-in z-10`}>
						<img
							src="./assets/icon-bookmark-empty.svg"
							alt="bookmark"
							className={` filter brightness-100 invert transition-all ease-in`}
						/>
					</div>
				) : (
					<div
						onClick={toggleBookmark}
						className={`${toggleEffect ? "custom-bounce" : ""}
						} absolute top-4 right-4 h-8 w-8 rounded-full bg-DarkBlue/50 hover:bg-White flex items-center justify-center group transition-all ease-in z-10`}>
						<img
							src="./assets/icon-bookmark-empty.svg"
							alt="bookmark"
							className={` filter group-hover:brightness-100 group-hover:invert transition-all ease-in`}
						/>
					</div>
				)}
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
			<div className="text-White/75 text-xs lg:text-lg flex flex-col pt-1 gap-2">
				<div className="flex flex-row items-center gap-1 md:gap-2 text-[11px] lg:text-[13px] xl:text-[15px] ">
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
					<h2 className="text-White text-[14px] md:text-[18px] xl:text-[24px] font-medium">
						{movie.title}
					</h2>
				</div>
			</div>
		</div>
	);
};
