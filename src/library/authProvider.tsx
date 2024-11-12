import { AuthContextType, AuthProviderProps } from "./types";
import React, { createContext, useContext, useState, useEffect } from "react";
import { createClient, User } from "@supabase/supabase-js";

const supabase = createClient(
	"https://mtdxodsbbwnvqdxpaqrl.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10ZHhvZHNiYndudnFkeHBhcXJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4NjYxNDcsImV4cCI6MjA0NTQ0MjE0N30.Vpb6InT8sdTsC3DueR1GQEyyMuoZjvFIO4PvuH76ayM",
	{
		auth: {
			persistSession: true,
			storage: localStorage,
		},
	}
);

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useState<null | User>(null);
	const [error, setError] = useState<null | string>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getSession = async () => {
			const {
				data: { session },
				error,
			} = await supabase.auth.getSession();
			if (session) {
				setUser(session.user);
			} else if (error) {
				setError(error.message);
			}
		};

		getSession();
	}, []);

	// Sign up + Log in
	const signUp = async (email: string, password: string) => {
		setLoading(true);
		setError(null);

		const { error } = await supabase.auth.signUp({ email, password });

		if (error) {
			setError(error.message);
			setLoading(false);
			return;
		}

		const { data: signInData, error: signInError } =
			await supabase.auth.signInWithPassword({
				email,
				password,
			});

		if (signInError) {
			setError(signInError.message);
		} else {
			setUser(signInData?.user);
		}

		setLoading(false);
	};
	// Sign in
	const signIn = async (email: string, password: string) => {
		setLoading(true);
		setError(null);

		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});
		if (error) {
			setError(error.message);
			setLoading(false);
			return;
		} else {
			setUser(data?.user);
		}

		setLoading(false);
	};

	return (
		<AuthContext.Provider
			value={{ user, loading, error, setError, signUp, signIn }}>
			{children}
		</AuthContext.Provider>
	);
};
