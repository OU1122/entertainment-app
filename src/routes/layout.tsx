import { Outlet } from "react-router-dom";
import { SideBar } from "../components/sidebar";

export const Layout: React.FC = () => {
	return (
		<>
			<SideBar />
			<Outlet />
		</>
	);
};
