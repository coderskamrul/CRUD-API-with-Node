import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Updated = () => {
  const updatedUser = useLoaderData();

  const handleUpdated = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name , email);
    const newUser = { name, email };
    fetch ( `http://localhost:5000/update/${updatedUser._id}` ,{
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(newUser)
    })
    .then(data => data.json())
    .then( data =>{
        console.log(data);
    })
  }
  return (
    <div>
       <h1>Update {updatedUser.name}</h1> 
       <form onSubmit={handleUpdated}>
            <input type="text" name="name" defaultValue={updatedUser.name} id="" />
            <input type="email" name="email" defaultValue={updatedUser.email} id="" />
            <input type="submit" value="Submit" />
       </form>
    </div>

  )
}

export default Updated