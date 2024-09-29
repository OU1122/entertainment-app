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
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
