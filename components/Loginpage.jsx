"use client"
import { signIn } from "next-auth/react";
const Loginpage = () => {
  return (
    <>
    <button onClick={()=>signIn("google")}>
        Login with Google   

    </button>
    </>
  )
}

export default Loginpage