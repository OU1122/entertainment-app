import { useEffect, useState } from "react";
import { useAuth } from "../library/authProvider";
import { Link, useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
	const { signIn, error, user } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			navigate("/");
		}
	}, [user, navigate]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await signIn(email, password);
		} catch (err) {
			console.error("Sign in failed:", error);
		}
	};

	return (
		<div className="max-w-[1240px] h-screen w-full mx-auto flex flex-col items-center justify-center px-6 gap-16">
			<div className="mt-6">
				<Link to={"/"}>
					<img
						className="w-10 h-10"
						src="/assets/logo.svg"
						alt="logo"></img>
				</Link>
			</div>
			<div className="max-w-[400px] max-h-[373px] bg-SemiDarkBlue rounded-3xl  flex flex-col items-start justify-around py-6 px-8 w-full h-full mb-6">
				<h2 className="text-White w-full text-[32px] font-extralight">
					Login
				</h2>
				<form
					onSubmit={handleSubmit}
					className="flex flex-col items-stretch justify-center gap-3 w-full font-extralight ">
					<input
						className="bg-SemiDarkBlue px-4 py-2  caret-Red placeholder-opacity-40 text-White  border-b-LightBlue border-b-[1px] focus:border-b-White focus:outline-none transition-all duration-300"
						type="email"
						placeholder="Email address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}></input>

					<input
						className="bg-SemiDarkBlue px-4 py-2 mb-4 caret-Red placeholder-opacity-40 text-White  border-b-LightBlue border-b-[1px] focus:border-b-White focus:outline-none transition-all duration-300"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"></input>

					<button
						type="submit"
						className="bg-Red max-h-[48px] rounded-lg text-White text-[15px] p-4 hover:text-DarkBlue hover:bg-White flex items-center justify-center transition-colors ease-in">
						Login to your account
					</button>
					{error && <p className="self-center text-Red">{error}</p>}
				</form>
				<p className="text-White self-center font-extralight">
					Don't have an account?{" "}
					<span
						onClick={() => (window.location.href = "/signup")}
						className="text-Red font-bold cursor-pointer">
						Sign Up
					</span>
				</p>
			</div>
		</div>
	);
};
