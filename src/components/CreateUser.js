import React, {useState, useEffect} from "react";

export default function CreateUser() {

    const [username, setUsername] = useState('')

    const createUser = (e) => {
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username: username })
        }

        fetch('http://localhost:5000/users/add',options)
            .then(res => res.json())
            .then(console.log)
            .catch(err => console.error(err))
    }


    return(<div>
        <form onSubmit={createUser}>
            <label>Username</label>
            <input type="text" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="submit" name="Create Username" value="Create Username"/>
        </form>
    </div>)
}