export const SideBar: React.FC = () => {
	return (
		<nav className="bg-SemiDarkBlue w-[96px] max-h-[960px] h-[90vh] rounded-[10px] mb-4  border flex flex-col justify-between py-5 ml-5 shrink-0">
			<div className="flex items-center flex-col justify-center py-2">
				<div className="mb-10">
					<img
						src="../src/assets/logo.svg"
						alt=""
					/>
				</div>
				<div className="flex flex-col items-center justify-center gap-6">
					<img
						src="../src/assets/icon-nav-home.svg"
						alt="home"
						className="hover:cursor-pointer hover:brightness-[1.2] hover:saturate-[300%] hover:hue-rotate-[125deg] hover:contrast-100 filter"
					/>
					<img
						src="../src/assets/icon-nav-movies.svg"
						alt="movies"
						className="hover:cursor-pointer hover:brightness-[1.2] hover:saturate-[300%] hover:hue-rotate-[125deg] hover:contrast-100 filter"
					/>
					<img
						src="../src/assets/icon-nav-tv-series.svg"
						alt="tv-series"
						className="hover:cursor-pointer hover:brightness-[1.2] hover:saturate-[300%] hover:hue-rotate-[125deg] hover:contrast-100 filter"
					/>
					<img
						src="../src/assets/icon-nav-bookmark.svg"
						className="hover:cursor-pointer hover:brightness-[1.2] hover:saturate-[300%] hover:hue-rotate-[125deg] hover:contrast-100 filter"
						alt="bookmark"
					/>
				</div>
			</div>
			<div className="flex items-center justify-center py-4">
				<img
					className="w-10 h-10 border-White border rounded-full"
					src="../src/assets/image-avatar.png"
					alt=""
				/>
			</div>
		</nav>
	);
};
