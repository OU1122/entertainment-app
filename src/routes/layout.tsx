import { Outlet } from "react-router-dom";
import { SideBar } from "../components/sidebar";

export const Layout: React.FC = () => {
	return (
		<div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row mt-4 lg:mt-14 justify-center items-center lg:items-start">
			<SideBar />
			<Outlet />
		</div>
	);
};
