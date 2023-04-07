import Link from 'next/link'
import Card from '../components/Card'
import styles from '../styles/Form.module.css'

export default function Form() {
  return (
    <div className={styles.form}>
      <div>
        <Card color="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card></Card>
      </div>
      <div>
        <Card></Card>
        <Card color="#28a085">
          <Link href={`/game/5/2`} passHref className={styles.link}>
            <h2>Start</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
