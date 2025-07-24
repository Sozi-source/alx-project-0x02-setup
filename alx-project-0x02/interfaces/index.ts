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