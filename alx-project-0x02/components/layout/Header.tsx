import React from "react";
import Link from "next/link";


const Header: React.FC =()=>{

    return(
        <header>
        <Link href= '/home' className="bg-blue-400 p-3">Home</Link>
        <Link href= '/about' className="bg-blue-400 p-3" >About</Link>
        </header>
    )
}
export default Header;