import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> =({name, username, email, address})=>{

return(
<div className="border border-gray-400 w-90 rounded-lg bg-blue-100 shadow-lg p-5">
    <h3><strong>Name</strong>: {name}  </h3>
    <p><strong>Username</strong>: {username}  </p>
    <p> <strong>Email</strong>:{email} </p>
    <div>
        <h3><strong>Address</strong> </h3>
        <p>City:{address.city} </p>
        <p>Street:{address.street} </p>
        <p>Suite:{address.suite} </p>
        <p>Zipcode:{address.zipcode} </p>
    </div>
</div>

)
}
export default UserCard;