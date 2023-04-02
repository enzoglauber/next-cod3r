import { useState } from "react"

export default function form() {
  const [name, setName] = useState('')  
  const [age, setAge] = useState(0)
  const [users, setUsers] = useState([])
 
  const save = async () => {
    await fetch('/api/form', {
      method: 'POST',
      body: JSON.stringify({ name, age })
    })
    
    const response = await fetch('/api/form')
    // response.then(res => res.json()).then(console,log)
    const data = await response.json()
    setUsers(data)
  }

  const renderUsers = () => {
    if (!users.length) return false
    return users.map((user, i) => (
      <li key={user+i}>{user.name} are {user.age} years old.</li>
    ))
  }

  return (
    <div>
      <h1>Api Integration</h1>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(+e.target.value)}/>

      <button type="button" onClick={save}>
        Enviar
      </button>

      
      <ul>
        {renderUsers()}
      </ul>
    </div>
  )
}