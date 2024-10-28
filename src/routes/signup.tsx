import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../library/authProvider";

export const Signup: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordCheck, setPasswordCheck] = useState("");
	const { signUp, loading, error, user } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await signUp(email, password);
		if (user) {
			navigate("/");
		} else {
			console.error("Sign up failed:", error);
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
			<div className="max-w-[400px] max-h-[418px] bg-SemiDarkBlue rounded-3xl  flex flex-col items-start justify-around py-6 px-8 w-full h-full mb-6">
				<h2 className="text-White w-full text-[32px] font-extralight">
					Sign Up
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
						className="bg-SemiDarkBlue px-4 py-2  caret-Red placeholder-opacity-40 text-White  border-b-LightBlue border-b-[1px] focus:border-b-White focus:outline-none transition-all duration-300"
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}></input>

					<input
						className="bg-SemiDarkBlue px-4 py-2  caret-Red placeholder-opacity-40 text-White  border-b-LightBlue border-b-[1px] focus:border-b-White focus:outline-none transition-all duration-300 mb-4"
						type="password"
						placeholder="Repeat password"
						value={passwordCheck}
						onChange={(e) => setPasswordCheck(e.target.value)}></input>
					<button
						type="submit"
						disabled={loading}
						className="bg-Red max-h-[48px] rounded-lg text-White text-[15px] p-4 hover:text-DarkBlue hover:bg-White flex items-center justify-center transition-colors ease-in">
						Create an account
					</button>
					{error && <p>{error}</p>}
				</form>
				<p className="text-White self-center font-extralight">
					Already have an account?{" "}
					<Link to={"/login"}>
						<span className="text-Red font-bold cursor-pointer">
							Log in
						</span>
					</Link>
				</p>
			</div>
		</div>
	);
};
