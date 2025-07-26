import { ReactNode } from "react";

export interface CardProps{
    title: string
    content: string
}

export interface formInput{
    title: string,
    content: string
}

export interface PostModalProps{
    onClose: ()=> void;
    onSubmit: (data: { title: string; content: string }) => void;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    size?: "small"| "medium"| "large";
    shape?: "rounded-sm" | "rounded-md" | "rounded-full";
    label?: string;
    className?: string
    type?: "submit"| "button" 
    onClick?: ()=> void;
    children?: ReactNode;
}

export interface PostProps{
    title: string,
    body: string,
    userId: number
}

export interface UserProps{
    
} 