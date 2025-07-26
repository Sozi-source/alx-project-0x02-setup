
import { useState, useEffect} from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps>=({title, body})=>{

    return(
        <div className="border border-gray-400 p-5 rounded-lg shadow-md w-90">
            <h3 className="text-lg text-green-700">{title} </h3>
            <p className="text-md text-gray-600">{body} </p>
        </div>
    )
}

export default PostCard;

