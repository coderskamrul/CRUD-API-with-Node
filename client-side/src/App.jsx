import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  // const [user, setCount] = useState(0)

  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};
    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }
  return (
    <>
      <h1>Simple Crud</h1>
      <Link to={'/users'}>Users</Link>
      <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" />
            <input type="text" name="email" />
            <button type="submit" >add user</button>
        </form>
      </div>
    </>
  )
}

export default App
