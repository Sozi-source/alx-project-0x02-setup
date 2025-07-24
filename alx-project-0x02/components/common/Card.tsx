import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> =({title, content})=>{
    return(
        <div className="bg-gray-300 border border-back shadow-md w-60 h-36 rounded-md flex-wrap p-3">
            <h2 className="text-xl text-green-600">{title} </h2>
            <p className="text-md text-black">{content} </p>
        </div>
    )
}
export default Card;
