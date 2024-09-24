import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./routes/layout";
import { Homepage } from "./routes/homepage";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					index: true,
					element: <Homepage />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
