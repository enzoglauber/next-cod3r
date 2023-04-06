import { useState } from 'react'
import Door from '../components/Door'
import Gift from '../components/Gift'
import DoorModel from '../model/door'

export default function Home() {
  const [door1, setDoor1] = useState(new DoorModel(2, false, true))

  return (
    <div style={{ display: 'flex' }}>
      <Gift />
      <Door value={door1} onChange={(door) => setDoor1(door)} />
    </div>
  )
}
