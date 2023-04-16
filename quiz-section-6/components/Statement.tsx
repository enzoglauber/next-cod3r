import styles from '../styles/Statement.module.css'

interface StatementProps {
  text: string
}

export default function Statement({ text }: StatementProps) {
  return (
    <div className={styles.statement}>
      <div className={styles.text}>{text}</div>
    </div>
  )
}
