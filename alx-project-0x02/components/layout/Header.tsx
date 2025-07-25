import React from "react";
import Link from "next/link";


const Header: React.FC =()=>{

    return(
        <header className="fixed top-0 w-full z-50 bg-white text-blue-400">
        <div className="flex items-center justify-center gap-5">
            <Link href= '/home' className="p-3">Home</Link>
            <Link href= '/about' className="p-3" >About</Link>
        </div>
        </header>
    )
}
export default Header;