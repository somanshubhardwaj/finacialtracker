"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
const Userlogout = () => {
  const { status, data: session } = useSession();

  return (
    <div>
        <span>{session.user.name}</span>
        <span>{session.user.email}</span>
      <button onClick={signOut}>Login with Google</button>
    </div>
  );
};

export default Userlogout;
