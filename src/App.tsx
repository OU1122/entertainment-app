import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./routes/layout";
import { Homepage } from "./routes/homepage";
import data from "./library/data.json";

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
					element: <div className="text-White">Movie Details</div>,
				},
				{
					path: "/tv-shows/",
					element: <div className="text-White">TV Show Details</div>,
				},
				{
					path: "/bookmarked/",
					element: <div className="text-White">Bookmarked</div>,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
