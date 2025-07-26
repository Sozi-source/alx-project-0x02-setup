import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import { GetStaticProps } from "next";


interface postPageProps{
    posts: PostProps[];
}

const Posts: React.FC<postPageProps>=({posts})=>{
    return(
        
       <div>
        <Header />
        
        <h2 className="text-2xl text-blue-600 mt-15 ml-8">My Posts</h2>
         <div className="grid grid-cols-3 gap-3 space-y-5 mt-5 ml-8">
            {posts.map((post, index)=>(
                <PostCard key={index} title={post.title} body={post.body} userId={post.userId} />
            ))}
        </div>
       </div>  
    )
}

export const getStaticProps: GetStaticProps =async()=>{

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts: PostProps[] = await response.json()

    return{
        props:{
            posts: posts.slice(0,15)
        }
    }
}

export default Posts;
