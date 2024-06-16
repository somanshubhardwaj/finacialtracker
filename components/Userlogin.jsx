"use client"
import { signIn } from "next-auth/react";
const Userlogin = () => {
  return (
    <>
    <button onClick={()=>signIn("google")}>
        Login with Google   

    </button>
    </>
  )
}

export default Userlogin