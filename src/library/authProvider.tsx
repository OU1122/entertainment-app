import { AuthContextType, AuthProviderProps } from "./types";
import React, { createContext, useContext, useState, useEffect } from "react";
import { createClient, User } from "@supabase/supabase-js";

const supabase = createClient(
	"https://mtdxodsbbwnvqdxpaqrl.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10ZHhvZHNiYndudnFkeHBhcXJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4NjYxNDcsImV4cCI6MjA0NTQ0MjE0N30.Vpb6InT8sdTsC3DueR1GQEyyMuoZjvFIO4PvuH76ayM"
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
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((event, session) => {
			setUser(session?.user ?? null);
			setLoading(false);
		});
		return () => {
			subscription.unsubscribe();
		};
	}, []);

	// Function to handle user sign-up
	const signUp = async (email: string, password: string) => {
		setLoading(true);
		setError(null);

		const { data, error } = await supabase.auth.signUp({ email, password });

		if (error) {
			setError(error.message);
		} else if (data.user) {
			setUser(data.user);
		}

		setLoading(false);
	};

	// Function to handle user login
	const signIn = async (email: string, password: string) => {
		setLoading(true);
		setError(null);

		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			setError(error.message);
		} else if (data.user) {
			setUser(data.user);
		}

		setLoading(false);
	};

	// Function to handle user logout
	const signOut = async () => {
		setLoading(true);
		setError(null);
		await supabase.auth.signOut();
		setUser(null);
		setLoading(false);
	};

	return (
		<AuthContext.Provider
			value={{ user, loading, error, signUp, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	);
};
