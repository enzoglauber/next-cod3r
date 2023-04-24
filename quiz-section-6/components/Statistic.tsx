import styles from '../styles/Statistic.module.css'

interface StatisticProps {
  value: string | number
  text: string
  color?: string
  backgroundColor?: string
}

export default function Statistic({
  text,
  value,
  color = '#333',
  backgroundColor = '#FDD60F'
}: StatisticProps) {
  return (
    <div className={styles.container}>
      <div
        className={styles.value}
        style={{
          backgroundColor,
          color
        }}
      >
        {value}
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  )
}
