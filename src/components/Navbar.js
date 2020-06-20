import React from "react";
import {Link} from 'react-router-dom';

export default function Navbar() {
    return(
    <div>
        <Link to="/">All Exercises</Link>
        <Link to="/create">Create Exercise</Link>
        <Link to="/user">Create User</Link>
    </div>
    )
}