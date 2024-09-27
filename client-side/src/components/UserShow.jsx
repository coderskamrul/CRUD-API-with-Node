import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const UserShow = () => {
    const dbusers = useLoaderData();
    const [users, setUsers] = useState(dbusers);
    const handleDeleteUser = (id) => {
        console.log(id);
        fetch( `http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            const updated_users = users.filter( (user) => user._id !== id );
            console.log(updated_users);
            setUsers(updated_users);
            console.log(data);
        })
    }
  return (
    <>
        <div>UserShow</div>
        {
            users.map(user =>
                <p key={user._id}><span>{user.name}</span> <span>{user.email}</span> <Link to={`../update/${user._id}`}> <button>Update</button></Link> <button onClick={() => handleDeleteUser(user._id)}>X</button></p>
            )
        }
    </>
  )
}

export default UserShow