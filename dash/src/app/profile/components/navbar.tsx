import Image from "next/image";
import navbar from "../assets/navbar.png";

export default function Navbar() {
    return (
      <div className="flex justify-between p-2 items-center m-2">
        <h1 className="text-2xl font-semibold">Profile</h1>
        <div className="flex gap-2">
        <Image src={navbar} alt="Navbar" width={200} height={120} />
        </div>
      </div>
    )
  }
  
