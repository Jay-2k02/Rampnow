import Navbar from "@/components/Navbar";
import LogIn from "@/components/Signin";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <LogIn/>
      <main> 
        <h1>Hi</h1>
      </main>
    </div>
  );
}
