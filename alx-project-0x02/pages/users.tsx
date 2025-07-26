import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import { GetStaticProps } from "next";



interface userPageProps{
    users: UserProps[];
}

const UsersPage: React.FC<userPageProps> =({users})=>{

return(
<div>
<h2 className="mt-15 text-2xl text-blue-400 ml-10 font-bold">Users List </h2>
<div className="grid grid-cols-3 gap-5 space-y-5 mt-5 ml-10">
    {users.map((user, index)=>(
    <UserCard key={index}
    name={user.name}  
    username={user.username} 
    email={user.email} 
    address={user.address} />
))}
</div>
</div>
)
}

export const getStaticProps: GetStaticProps<userPageProps> = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users: UserProps[]= await response.json();

    return{
        props:{
            users: users
        }
    }
}

export default UsersPage;