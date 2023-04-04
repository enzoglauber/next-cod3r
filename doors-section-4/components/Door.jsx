import React from 'react'
import styles from '../styles/Door.module.css'

function Door(props) {
  const selected = props.selected ? styles.selected : ''

  return (
    <div className={styles.area}>
      <div className={`${styles.structure} ${selected}`}>
        <div className={styles.door}>
          <div className={styles.number}>3</div>
          <div className={styles.handle}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  )
}

Door.propTypes = {
  selected: Boolean
}

export default Door
