import { SyntheticEvent } from 'react'
import DoorModel from '../model/door'
import styles from '../styles/Door.module.css'
interface DoorProps {
  value: DoorModel
  onChange: (door: DoorModel) => void
}

function Door(props: DoorProps) {
  const { value, onChange } = props
  const selected = value.selected && !value.opened ? styles.selected : ''

  const toggle = (e) => onChange(value.toggle())

  const open = (e: SyntheticEvent) => {
    e.stopPropagation()
    onChange(value.open())
  }

  const doorOpen = () => (
    <div className={styles.door}>
      <div className={styles.number}>{value.number}</div>
      <div className={styles.handle} onClick={open}></div>
    </div>
  )

  return (
    <div className={styles.area} onClick={toggle}>
      <div className={`${styles.structure} ${selected}`}>{value.opened ? false : doorOpen()}</div>
      <div className={styles.floor}></div>
    </div>
  )
}

export default Door
