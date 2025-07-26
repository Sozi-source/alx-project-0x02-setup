import { useState, useEffect} from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC=()=>{

 const [post, setPost]=useState<PostProps[]>([])
 const [loading, setLoading]= useState<boolean>(true)
 const [error, setError]= useState("")

 useEffect(()=>{
    const fetchPost = async()=>{
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts')
    if(response.ok){
        const post: PostProps[] = await response.json()

        setPost(post);
        setLoading(false)

    } else{
        setError("Failed to load post")
        setLoading(false)
    }
    
    }

    fetchPost();
 },[])

return(
    <div>
        {loading && <p> Loading...</p>}
        {error && <p>{error} </p> }

        <div className="grid grid-cols-4 bg-white gap-5 ml-9 mr-9">
            {post.slice(0,18).map((p)=>(
            <div key={p.id} 
            className="border border-gray-600 bg-gray-300 p-5 rounded-md shadow-lg w-64">
                <h2 className="text-xl text-blue-800">{p.title} </h2>
                <p>{p.body} </p>
            </div>
        ))}
        </div>

    
    </div>

)

}
export default PostCard;