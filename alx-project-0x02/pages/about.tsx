import React from "react";
import Button from "@/components/common/Button";

const About: React.FC =()=>{
    return(
        <div>
            <h1>About Page</h1>

            <div className="flex items-center gap-5 p-5">
                <Button size ="small" shape = "rounded-sm"className="bg-blue-300 text-white border border-solid-gray-500">Small Button</Button>

                <Button size ="medium" shape = "rounded-md"className="bg-blue-300 text-white border border-solid-gray-500">Medium Button</Button>

                <Button size ="large" shape = "rounded-full"className="bg-blue-300 text-white border border-solid-gray-500"> Large Button</Button>
            </div>
        </div>
    )
}
export default About;