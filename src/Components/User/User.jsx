/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const User = ({user}) => {
    const {name, email, phone,id} = user ;
    const useStyle = {
        border : '2px solid red',
        padding : '6px',
        borderRadius: '5px'
    }
    return (
        <div style={useStyle}>
            <h3>Name: {name}</h3>
            <p>Email: {email} </p>
            <p>Phone:{phone} </p>
            <Link to={`/user/${id}`}>Show details</Link>
        </div>
    );
};

export default User;