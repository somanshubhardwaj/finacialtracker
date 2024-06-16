"use client";
import { signOut, useSession, signIn } from "next-auth/react";

const Navbar = () => {
  const { status, data: session } = useSession();
  return (
    <nav className="flex justify-between px-6 pt-6">
      <span className="font-extrabold text-4xl">Finacial Tracker</span>
      {status === "authenticated" && (
        <div className="flex items-center">
          <span className="mr-4">Welcome, {session.user.name}</span>
          <button
            onClick={() => signOut()}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign out
          </button>
        </div>
      )}
      {status == "unauthenticated" && (
        <div className="flex items-center">
          <button
            onClick={() => signIn("google")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign in
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
