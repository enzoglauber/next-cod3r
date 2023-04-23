import { useRouter } from 'next/router'
import styles from '../styles/Result.module.css'

export default function Result() {
  const router = useRouter()

  const total = +router.query.total
  const rights = +router.query.rights
  const percent = Math.round((rights / total) * 100)

  console.log(total, rights)
  return (
    <div className={styles.container}>
      <h1>Final Result</h1>
      <div>{total}</div>
      <div>{rights}</div>
      <div>{`${percent}%`}</div>
    </div>
  )
}
