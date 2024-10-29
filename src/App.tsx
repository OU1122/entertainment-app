import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import { Layout } from "./routes/layout";
import { Homepage } from "./routes/homepage";
import { Movies } from "./routes/movies";
import { Shows } from "./routes/shows";
import { Bookmarks } from "./routes/bookmarks";
import { Signup } from "./routes/signup";
import { Login } from "./routes/login";
import { useQuery } from "@tanstack/react-query";
import { axiosFetch } from "./library/axiosFetch";
import { useAuth } from "./library/authProvider";

function App() {
	const { user } = useAuth();

	const { data: movies } = useQuery({
		queryKey: ["posts"],
		queryFn: () => axiosFetch("http://localhost:3000/api/movies"),
	});

	const { data: bookmarks } = useQuery({
		queryKey: ["bookmarks"],
		queryFn: () => axiosFetch("http://localhost:3000/api/bookmarks"),
	});

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					index: true,
					element: <Homepage movieData={movies || []} />,
				},
				{
					path: "/movies/",
					element: <Movies movieData={movies || []} />,
				},
				{
					path: "/tv-shows/",
					element: <Shows movieData={movies || []} />,
				},
				{
					path: "/bookmarks/",
					element: (
						<Bookmarks
							movieData={movies || []}
							bookmarks={bookmarks}
						/>
					),
				},
			],
		},
		{
			path: "/signup/",
			element: user ? <Navigate to={"/"} /> : <Signup />,
		},
		{
			path: "/login/",
			element: user ? <Navigate to={"/"} /> : <Login />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
