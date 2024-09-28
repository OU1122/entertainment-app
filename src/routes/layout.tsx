import { Outlet } from "react-router-dom";
import { SideBar } from "../components/sidebar";

export const Layout: React.FC = () => {
	return (
		<div className="max-w-[1440px] mx-auto flex mt-14">
			<SideBar />
			<Outlet />
		</div>
	);
};
