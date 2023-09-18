import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name} = user;
    return (
        <div>
            <h2>user details about us</h2>
            <p>User:{name} </p>
        </div>
    );
};

export default UserDetails;