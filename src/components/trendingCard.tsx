import { TrendingCardProps } from "../library/types";

export const TrendingCard: React.FC<TrendingCardProps> = ({ movie }) => {
	return (
		<div className="w-[240px] h-[140px] md:w-[470px] md:h-[240px] border shrink-0 border-Red "></div>
	);
};
