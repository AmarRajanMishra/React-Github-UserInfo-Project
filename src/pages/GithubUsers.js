import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


function GithubUsers() {

    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState('?')

    const getGithubUsers = (search) => {
        
        axios.get('https://api.github.com/users'+search)
            .then((response) => setUsers(response.data))
            .catch((error) => console.log(error))

    }

    useEffect(() => {
        getGithubUsers(`/${query}`);
    }, [query]);
 
    return (
        <div className="userlist-wrapper">
            <h1>List of Github users:</h1>
            <input type='text' onChange={(e)=>setQuery(e.target.value)} />
            <div>
                <Link to={'/details/'+users.id}><h1>{users.login}</h1></Link>
            </div>
            <ol>
                {/* {
                    users.map((user, i) => {
                        return <li key={i}>
                            <Link to={"/details/" + user.id}>{user.login}</Link>
                        </li>
                    })
                } */}
            </ol>
        </div>
    );
};

export default GithubUsers;