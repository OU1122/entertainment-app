import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
					element: <Bookmarks movieData={movies || []} />,
				},
			],
		},
		{
			path: "/signup/",
			element: <Signup />,
		},
		{
			path: "/login/",
			element: <Login />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
