import { formInput, PostModalProps } from "@/interfaces";
import { useState } from "react";

const PostModal: React.FC<PostModalProps> =({onClose, onSubmit})=>{
    const [formData, setFormData]= useState<formInput>({title:"", content: ""});
    const [loading, setLoading]= useState(false)
    const [error, setError]= useState("")

    const handleChange = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
        setError("");
    }

    const handleSubmit =async(e: React.FormEvent)=>{
        e.preventDefault();

        // Validation
        if(!formData.title.trim()|| !formData.content.trim()){
            setError("Both title and Content are required")
            return;

        }

        setLoading(true)
        
        onSubmit({
            title: formData.title,
            content: formData.content
        })

        setFormData({title: "", content: ""})

        onClose();
        
    }

    return(
        <div>
             
            <div> 
                <form onSubmit={handleSubmit} className="pl-8">
                    <input type="text" 
                    name="title" 
                    value={formData.title} 
                    onChange={handleChange} 
                    placeholder="Enter Title"  className="w-3/4 pl-8 border border-gray-300 text-lg rounded-md"/>

                    <textarea name="content" 
                    value={formData.content} 
                    onChange={handleChange} 
                    placeholder="Enter Content" className="w-3/4 pl-8 border border-gray-300 text-lg rounded-md mt-5">
                    </textarea>
                
                    <button type="submit" className="bg-blue-300 text-black w-20 h-10 text-lg hover:bg-gray-200 rounded-md">Post</button>

                    {error && (
                        <p className="text-red-700">{error} </p>
                    )}
                    
                </form>           

                    
                </div>
                    
                </div>    
    )
}
export default PostModal;