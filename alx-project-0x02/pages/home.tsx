import React, {useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { formInput } from "@/interfaces";




const initialPosts: formInput[] = [
  {
    title: "Healthy Living",
    content: "Adopt daily habits that support your body and mind."
  },
  {
    title: "Smart Nutrition",
    content: "Learn how to balance carbs, proteins, and fats in every meal."
  },
  {
    title: "Mental Wellness",
    content: "Practice mindfulness and stress management techniques."
  },
  {
    title: "Fitness First",
    content: "Incorporate simple exercises into your daily routine."
  },
  {
    title: "Hydration Hacks",
    content: "Discover fun ways to drink more water every day."
  },
  {
    title: "Sleep Better",
    content: "Improve your sleep hygiene for better health and focus."
  },
  {
    title: "Tech & Health",
    content: "Explore how mobile apps can help track your wellness goals."
  },
  {
    title: "Meal Planning",
    content: "Save time and eat better with a simple weekly meal plan."
  },
  {
    title: "Community Health",
    content: "Join local wellness initiatives and support public health."
  },
  {
    title: "Immunity Boosters",
    content: "Learn about vitamins and foods that strengthen immunity."
  },
  {
    title: "Mindful Eating",
    content: "Slow down and enjoy your meals with intention."
  },
  {
    title: "Active Lifestyles",
    content: "Small movements throughout the day make a big difference."
  }
];



const Home: React.FC =()=>{
    const [cardData, setCardData] = useState<formInput[]>(initialPosts)

    const [showModal, setShowModal] = useState(false)

    const handleAddPost = (newPost: {title: string, content: string})=>{
        setCardData([newPost, ...cardData])
        setShowModal(false)
    }

    return(
        <div>
            <h1 className="mt-10 text-3xl text-blue-300 pl-8">Home Page</h1>

            <button onClick={()=> setShowModal(true)}>
                Create New Post
            </button>

            {showModal &&(
                <PostModal 
                onClose={()=>setShowModal(false)}
                onSubmit={handleAddPost}/>
            )}
            
           <div className="bg-gray-200 min-h-screen">
            <div className="grid grid-cols-4 gap 5 space-y-5 p-8">
                {cardData.map((cd, index)=>(
                <div key={index} >
                    <Card title= {cd.title} 
                    content= {cd.content} />
                </div>


               ))} 
           </div>
           </div>

            
        </div>
    )
}
export default Home;