import { formInput, PostModalProps } from "@/interfaces";
import { useState } from "react";

const PostModal: React.FC<PostModalProps> =({onClose, onSubmit})=>{
    const [formData, setFormData]= useState<formInput>({title:"", content: ""});
    const [loading, setLoading]= useState(false)

    const handleChange = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit =async(e: React.FormEvent)=>{
        e.preventDefault();
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
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Enter Title" />

                    <textarea name="content" value={formData.content} onChange={handleChange} placeholder="Enter Content"></textarea>
                
                    <button type="submit">Post</button>

                    
                </form>           

                    
                </div>
                    
                </div>    
    )
}
export default PostModal;