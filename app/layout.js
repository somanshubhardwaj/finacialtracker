import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Financial Tracker",
  description: "A simple financial tracker app built with Next.js and MongoDB.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       < div className="flex flex-col min-h-screen justify-between">
       <div>
        <Providers>
          <Navbar/>
        {children}
        </Providers></div>
        <Footer/>
        </div>
        </body>
    </html>
  );
}
