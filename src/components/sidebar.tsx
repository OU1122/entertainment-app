import { Link, NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../assets/icon-nav-home.svg";
import { ReactComponent as MovieIcon } from "../assets/icon-nav-movies.svg";
import { ReactComponent as ShowIcon } from "../assets/icon-nav-tv-series.svg";
import { ReactComponent as BookmarkIcon } from "../assets/icon-nav-bookmark.svg";

export const SideBar: React.FC = () => {
	return (
		<nav className="bg-SemiDarkBlue lg:w-[96px] max-h-[960px] lg:h-[90vh] rounded-[10px] mb-4  border flex align-items flex-row lg:flex-col justify-between py-4 px-4 lg:ml-10 mx-1 shrink-0 h-[73px] w-full">
			<div className="flex items-center flex-row lg:flex-col justify-between lg:justify-between py-2 w-full h-full">
				<div className="flex items-center justify-center md:flex-col">
					<div className="lg:mb-10 mb-0 flex items-center justify-center px-2 lg:px-0 ">
						<img
							src="../src/assets/logo.svg"
							alt=""
						/>
					</div>
					<div className=" flex-row lg:flex-col items-center justify-center gap-6 hidden lg:flex">
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
				</div>
				{/* mobile nav */}
				<div className="flex flex-row lg:flex-col items-center justify-center gap-6 lg:hidden">
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
				<div className="flex items-center justify-center py-4 px-2 lg:px-0">
					<Link to="/">
						<img
							className="w-10 h-10 border-White border rounded-full"
							src="../src/assets/image-avatar.jpg"
							alt=""
						/>
					</Link>
				</div>
			</div>
		</nav>
	);
};
