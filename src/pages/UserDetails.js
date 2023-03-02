import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function UserDetails() {

    const params = useParams();
    const [ userData, setUserData ] = useState({});
    
    const getUserDetails = (id) => {
        axios.get(`https://api.github.com/user/${id}`)
            .then((res) => setUserData(res.data))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        const id = params.id;
        getUserDetails(id);
    }, []);

    console.log(userData);
    return(
        <div className="user-details-wrapper">
            <h2>User Details</h2>
            <img src={userData.avatar_url} alt="avtar"></img>
            <p>{userData.name}, {userData.location}</p>
            <p>Twitter Username: <a href={`https://twitter.com/${userData.twitter_username}`}>{userData.twitter_username}</a></p>
            <p>Blog: <a href={userData.blog}>{userData.blog}</a></p>
        </div>
    );
};

export default UserDetails;