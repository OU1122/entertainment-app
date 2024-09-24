export const Search: React.FC = ({}) => {
	return (
		<form className="flex items-center">
			<span>
				<img src="../src/assets/icon-search.svg"></img>
			</span>
			<input
				placeholder="Search for movies or TV series"
				type="search"
				id="search"
				className="caret-Red ml-4 text-[24px] font-light w-full placeholder-White placeholder-opacity-40 text-White bg-DarkBlue focus:border-b-[1px] focus:border-b-LightBlue focus:outline-none"></input>
		</form>
	);
};
