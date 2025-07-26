import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> =({size="medium", shape ="rounded-md", children, label})=>{

const sizeMap = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-4 text-md',
    large: 'py-3 px-6 text-lg'
}


    return(
        <div>
            <button className={`bg-blue-400 text-white ${shape} ${sizeMap[size]} `}>{children || label || "Click Me"} </button>
        </div>

    )
}
export default Button;