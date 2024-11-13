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
import { axiosFetch, axiosFetchBookmarks } from "./library/axiosFetch";
import { useAuth } from "./library/authProvider";
import { BookmarkContext } from "./library/bookmarkContext";

function App() {
	const { user } = useAuth();

	const { data: movies } = useQuery({
		queryKey: ["posts"],
		queryFn: () =>
			axiosFetch(
				"https://entertainment-app-server-e0gh.onrender.com/api/movies"
			),
	});

	const { data: bookmarks } = useQuery({
		queryKey: ["bookmarks", user?.id],
		queryFn: () =>
			axiosFetchBookmarks(
				"https://entertainment-app-server-e0gh.onrender.com/api/bookmarks",
				user
			),
		enabled: !!user,
		initialData: [],
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
					element: user ? (
						<Bookmarks
							movieData={movies || []}
							bookmarks={bookmarks}
						/>
					) : (
						<Navigate
							to="/login"
							replace
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

	return (
		<BookmarkContext.Provider value={bookmarks}>
			<RouterProvider router={router} />{" "}
		</BookmarkContext.Provider>
	);
}

export default App;
