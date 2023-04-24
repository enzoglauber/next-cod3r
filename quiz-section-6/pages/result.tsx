import { useRouter } from 'next/router'
import Button from '../components/Button'
import Statistic from '../components/Statistic'
import styles from '../styles/Result.module.css'

export default function Result() {
  const router = useRouter()

  const total = +router.query.total
  const rights = +router.query.rights
  const percent = Math.round((rights / total) * 100)

  return (
    <div className={styles.container}>
      <h1>Final Result</h1>
      <div style={{ display: 'flex' }}>
        <Statistic text="Questions" value={total} />
        <Statistic text="Rights" backgroundColor="#9cd2a4" value={rights} />
        <Statistic text="Percent" backgroundColor="#de6a33" color="white" value={`${percent}%`} />
      </div>
      <Button text="Try again" href="/" />
    </div>
  )
}
