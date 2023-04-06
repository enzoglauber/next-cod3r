import { useState } from 'react'
import Door from '../components/Door'
import Gift from '../components/Gift'
import { buildDoors, updateDoors } from '../functions/doors'

export default function Home() {
  const [doors, setDoors] = useState(buildDoors(4, 2))

  console.log(`doors`, doors)

  const Doors = () =>
    doors.map((door) => (
      <Door
        key={door.number}
        value={door}
        onChange={(changed) => setDoors(updateDoors(doors, changed))}
      />
    ))

  return (
    <div style={{ display: 'flex' }}>
      <Gift />
      {Doors()}
    </div>
  )
}
