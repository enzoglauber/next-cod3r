import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Door from '../../../components/Door'
import { buildDoors, updateDoors } from '../../../functions/doors'
import styles from '../../../styles/Game.module.css'

function Game() {
  const [doors, setDoors] = useState([])
  const { query } = useRouter()

  useEffect(() => {
    const size = +query.size
    const withGift = +query.withGift
    setDoors(buildDoors(size, withGift))
  }, [query])

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
