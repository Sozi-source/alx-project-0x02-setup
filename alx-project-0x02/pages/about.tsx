import React from "react";
import Button from "@/components/common/Button";

const About: React.FC =()=>{
    return(
        <div>
            <h1>About Page</h1>

            <div className="flex items-center gap-5 p-5 mt-8">
                <Button size ="small" shape = "rounded-sm"className="">Small Button</Button>

                <Button size ="medium" shape = "rounded-md"className="">Medium Button</Button>

                <Button size ="large" shape = "rounded-full"className=""> Large Button</Button>
            </div>
        </div>
    )
}
export default About;