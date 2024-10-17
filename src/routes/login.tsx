import { useState } from "react";

export const Login: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState<string | null>(null);

	return (
		<div className="max-w-[1240px] h-screen w-full mx-auto flex flex-col items-center justify-center px-6 gap-16">
			<div>
				<img
					className="w-10 h-10"
					src="/assets/logo.svg"
					alt="logo"></img>
			</div>
			<div className="max-w-[400px] max-h-[418px] bg-SemiDarkBlue rounded-3xl  flex flex-col items-start justify-around py-6 px-8 w-full h-full">
				<h2 className="text-White w-full text-[32px] font-extralight">
					Sign Up
				</h2>
				<form className="flex flex-col items-stretch justify-center gap-3 w-full *:focus:non ">
					<input
						className="bg-SemiDarkBlue px-4 py-2  caret-Red placeholder-opacity-40 text-White  border-b-LightBlue border-b-[1px] focus:border-b-White focus:outline-none transition-all duration-300"
						type="email"
						placeholder="Email address"></input>

					<input
						className="bg-SemiDarkBlue px-4 py-2  caret-Red placeholder-opacity-40 text-White  border-b-LightBlue border-b-[1px] focus:border-b-White focus:outline-none transition-all duration-300"
						type="password"
						placeholder="Password"></input>
					<input
						className="bg-SemiDarkBlue px-4 py-2  caret-Red placeholder-opacity-40 text-White  border-b-LightBlue border-b-[1px] focus:border-b-White focus:outline-none transition-all duration-300 mb-4"
						type="password"
						placeholder="Repeat password"></input>
					<button
						type="submit"
						className="bg-Red max-h-[48px] rounded-lg text-White text-[15px] p-4  ">
						Create an account
					</button>
				</form>
				<p className="text-White self-center">
					Already have an account?{" "}
					<span className="text-Red font-bold cursor-pointer">Log in</span>
				</p>
			</div>
		</div>
	);
};
