export const SideBar: React.FC = () => {
	return (
		<nav className="bg-SemiDarkBlue w-[96px] max-h-[960px] h-[90vh] rounded-[10px] mb-4  border flex flex-col justify-between py-5">
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
						alt=""
					/>
					<img
						src="../src/assets/icon-nav-movies.svg"
						alt=""
					/>
					<img
						src="../src/assets/icon-nav-tv-series.svg"
						alt=""
					/>
					<img
						src="../src/assets/icon-nav-bookmark.svg"
						alt=""
					/>
				</div>
			</div>
			<div className="flex items-center justify-center">
				<img
					className="w-10 h-10 border-White border rounded-full"
					src="../src/assets/image-avatar.png"
					alt=""
				/>
			</div>
		</nav>
	);
};
