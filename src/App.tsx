import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./routes/layout";
import { Homepage } from "./routes/homepage";
import data from "./library/data.json";
import { Movies } from "./routes/movies";
import { Shows } from "./routes/shows";
import { Bookmarks } from "./routes/bookmarks";
import { Signup } from "./routes/signup";
import { Login } from "./routes/login";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					index: true,
					element: <Homepage movieData={data} />,
				},
				{
					path: "/movies/",
					element: <Movies movieData={data} />,
				},
				{
					path: "/tv-shows/",
					element: <Shows movieData={data} />,
				},
				{
					path: "/bookmarks/",
					element: <Bookmarks movieData={data} />,
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
