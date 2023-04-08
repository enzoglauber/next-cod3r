import Link from 'next/link'
import { useState } from 'react'
import Card from '../components/Card'
import InputNumber from '../components/InputNumber'
import styles from '../styles/Form.module.css'

export default function Form() {
  const [size, setSize] = useState(3)
  const [withGift, setWithGift] = useState(1)

  return (
    <div className={styles.form}>
      <div>
        <Card color="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <InputNumber value={size} onChange={(value) => setSize(value)} text="How many doors?" />
        </Card>
      </div>
      <div>
        <Card>
          <InputNumber
            value={withGift}
            onChange={(value) => setWithGift(value)}
            text="Door with gift?"
          />
        </Card>
        <Card color="#28a085">
          <Link href={`/game/${size}/${withGift}`} passHref className={styles.link}>
            <h2>Start</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
