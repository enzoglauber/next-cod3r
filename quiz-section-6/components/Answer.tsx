import AnswerModel from '../model/answer'
import styles from '../styles/Answer.module.css'

interface AnswerProps {
  value: AnswerModel
  index: number
  letter: string
  onAnswer: (index: number) => void
  color: string
}

export default function Answer(props: AnswerProps) {
  const answer = props.value

  return (
    <div className={styles.container} onClick={() => props.onAnswer(props.index)}>
      <div className={styles.content}>
        {answer.hidded ? (
          <div className={styles.front}>
            <div className={styles.letter} style={{ backgroundColor: props.color }}>
              {props.letter}
            </div>
            <div className={styles.value}>{answer.value}</div>
          </div>
        ) : (
          <div className={styles.back}>
            {answer.right ? (
              <div className={styles.right}>
                <div>A resposta certa é...</div>
                <div className={styles.value}>{answer.value}</div>
              </div>
            ) : (
              <div className={styles.wrong}>
                <div>A resposta informada esta errada...</div>
                <div className={styles.value}>{answer.value}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
