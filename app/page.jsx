"use client";
import Loginpage from "@/components/Loginpage";
import { useSession } from "next-auth/react";
import Homepage from "@/components/Homepage";
import Loadingpage from "@/components/Loadingpage";

export default function Home() {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return <Homepage />;
  } else if (status === "unauthenticated") {
    return <Loginpage />;
  } else if (status === "loading") {
    return <Loadingpage />;
  }
}
