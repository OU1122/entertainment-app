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
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
	"https://mtdxodsbbwnvqdxpaqrl.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10ZHhvZHNiYndudnFkeHBhcXJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4NjYxNDcsImV4cCI6MjA0NTQ0MjE0N30.Vpb6InT8sdTsC3DueR1GQEyyMuoZjvFIO4PvuH76ayM"
);

function App() {
	const { data: movies, isPending } = useQuery({
		queryKey: ["posts"],
		queryFn: () => axiosFetch("http://localhost:3000/api/movies"),
	});
	/* 
	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
		});

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});

		return () => subscription.unsubscribe();
	}, []);
	console.log(session);
	if (!session) {
		return (
			<Auth
				supabaseClient={supabase}
				appearance={{ theme: ThemeSupa }}
			/>
		);
	} else {
		return <div>Logged in!</div>;
	}
} */

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
