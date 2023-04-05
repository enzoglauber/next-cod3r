import DoorModel from '../model/door'
import styles from '../styles/Door.module.css'

interface DoorProps {
  door: DoorModel
}

function Door(props: DoorProps) {
  const { door } = props
  const selected = door.selected ? styles.selected : ''

  return (
    <div className={styles.area}>
      <div className={`${styles.structure} ${selected}`}>
        <div className={styles.door}>
          <div className={styles.number}>{door.number}</div>
          <div className={styles.handle}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  )
}

export default Door
