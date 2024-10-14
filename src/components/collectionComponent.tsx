import { CollectionComponentProps } from "../library/types";
import { RecommendedCard } from "./recommendedCard";

export const CollectionComponent: React.FC<CollectionComponentProps> = ({
	movieData,
	type,
}) => {
	let dataToDisplay;
	if (type === "Movies") {
		dataToDisplay = movieData.filter((data) => data.category === "Movie");
	} else {
		dataToDisplay = movieData.filter((data) => data.category === "TV Series");
	}

	return (
		<div className="w-full max-w-[1240px] pb-2 px-4">
			<h2 className="text-White text-[32px] font-light mb-6">{type}</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4  justify-items-center lg:justify-items-start gap-[10px] gap-y-6">
				{dataToDisplay.map((movie, index) => (
					<RecommendedCard
						key={index}
						movie={movie}
					/>
				))}
			</div>
		</div>
	);
};
