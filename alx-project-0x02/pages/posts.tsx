import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";

const Posts: React.FC=()=>{

    return(
        <div>
            <Header />
            <h2 className="mt-15 py-9 ml-8 text-3xl">Posts</h2>
            <PostCard />
        </div>
    )

}
export default Posts;