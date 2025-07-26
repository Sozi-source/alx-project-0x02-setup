import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const About: React.FC =()=>{
    return(
        <div>
            <Header />
            <h1>About Page</h1>

            <div className="flex items-center gap-5 p-5 mt-8">
                <Button size ="small" shape = "rounded-sm">Small Button</Button>

                <Button size ="medium" shape = "rounded-md">Medium Button</Button>

                <Button size ="large" shape = "rounded-full"> Large Button</Button>
            </div>
        </div>
    )
}
export default About;