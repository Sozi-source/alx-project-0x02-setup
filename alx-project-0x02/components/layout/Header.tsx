import Home from "@/pages";
import About from "@/pages/about";


const Header: React.FC =()=>{

    return(
        <header>
            <p>Project Header</p>
            <Home />
            <About />
        </header>
    )
}
export default Header;