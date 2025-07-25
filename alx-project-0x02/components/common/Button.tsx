import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> =({size, shape, children, className, ...props })=>{
    

    return(
        <div>
            <button>{children || "Click Me"} </button>
        </div>

    )
}
export default Button;