import Link from 'next/link'
import { useState } from 'react'
import Door from '../components/Door'
import { buildDoors, updateDoors } from '../functions/doors'
import styles from '../styles/Game.module.css'

function Game() {
  const [doors, setDoors] = useState(buildDoors(4, 2))

  const Doors = () =>
    doors.map((door) => (
      <Door
        key={door.number}
        value={door}
        onChange={(changed) => setDoors(updateDoors(doors, changed))}
      />
    ))

  return (
    <div id={styles.game}>
      <div className={styles.doors}>{Doors()}</div>
      <div className={styles.buttons}>
        <Link href="/">
          <button>Restart Game</button>
        </Link>
      </div>
    </div>
  )
}

export default Game
