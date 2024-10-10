import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./routes/layout";
import { Homepage } from "./routes/homepage";
import data from "./library/data.json";
import { Movies } from "./routes/movies";
import { Shows } from "./routes/shows";
import { Bookmarks } from "./routes/bookmarks";

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
	]);

	return <RouterProvider router={router} />;
}

export default App;
