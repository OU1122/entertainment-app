import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../assets/icon-nav-home.svg";
import { ReactComponent as MovieIcon } from "../assets/icon-nav-movies.svg";
import { ReactComponent as ShowIcon } from "../assets/icon-nav-tv-series.svg";
import { ReactComponent as BookmarkIcon } from "../assets/icon-nav-bookmark.svg";

export const SideBar: React.FC = () => {
	return (
		<nav className="bg-SemiDarkBlue md:w-[96px] max-h-[960px] md:h-[90vh] rounded-[10px] mb-4  border flex  flex-row md:flex-col justify-between py-5 ml-8 shrink-0">
			<div className="flex items-center flex-row md:flex-col justify-between md:justify-center py-2 w-full">
				<div className="mb-10 flex items-center justify-center">
					<img
						src="../src/assets/logo.svg"
						alt=""
					/>
				</div>
				<div className="flex flex-row md:flex-col items-center justify-center gap-6">
					{/* home icon */}
					<NavLink
						to="/"
						className={({ isActive }) =>
							`transition-colors ease-in ${
								isActive ? "text-White" : "text-LightBlue"
							}`
						}>
						<HomeIcon
							className={`hover:text-Red hover:cursor-pointer transition-colors ease-in `}
						/>
					</NavLink>
					{/* movies icon icon */}
					<NavLink
						to="/movies"
						className={({ isActive }) =>
							`transition-colors ease-in ${
								isActive ? "text-White" : "text-LightBlue"
							}`
						}>
						<MovieIcon
							className={`hover:text-Red hover:cursor-pointer transition-colors ease-in `}
						/>
					</NavLink>
					{/* TV Shows icon */}
					<NavLink
						to="/tv-shows"
						className={({ isActive }) =>
							`transition-colors ease-in ${
								isActive ? "text-White" : "text-LightBlue"
							}`
						}>
						<ShowIcon
							className={`hover:text-Red hover:cursor-pointer transition-colors ease-in `}
						/>
					</NavLink>
					{/* Bookmark icon */}
					<NavLink
						to="/bookmarks"
						className={({ isActive }) =>
							`transition-colors ease-in ${
								isActive ? "text-White" : "text-LightBlue"
							}`
						}>
						<BookmarkIcon
							className={`hover:text-Red hover:cursor-pointer transition-colors ease-in `}
						/>
					</NavLink>
				</div>

				<div className="flex items-center justify-center py-4">
					<img
						className="w-10 h-10 border-White border rounded-full"
						src="../src/assets/image-avatar.png"
						alt=""
					/>
				</div>
			</div>
		</nav>
	);
};
