import DoorModel from '../model/door'
import styles from '../styles/Door.module.css'

interface DoorProps {
  value: DoorModel
  onChange: (door: DoorModel) => void
}

function Door(props: DoorProps) {
  const { value, onChange } = props
  const selected = value.selected ? styles.selected : ''

  const toggle = (e) => onChange(value.toggle())

  return (
    <div className={styles.area} onClick={toggle}>
      <div className={`${styles.structure} ${selected}`}>
        <div className={styles.door}>
          <div className={styles.number}>{value.number}</div>
          <div className={styles.handle}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  )
}

export default Door
