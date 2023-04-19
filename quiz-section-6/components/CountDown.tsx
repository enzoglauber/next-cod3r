import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../styles/CountDown.module.css'

interface CountDownProps {
  duration: number
  onComplete: () => void
}

export default function CountDown({ duration, onComplete }: CountDownProps) {
  return (
    <div className={styles.countdown}>
      <CountdownCircleTimer
        size={120}
        duration={duration}
        onComplete={onComplete}
        isPlaying
        colors={['#BCE596', '#F7B801', '#ED827A']}
        colorsTime={[0.33, 0.33, 0.34]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  )
}
