import QuestionModel from '../model/question'
import styles from '../styles/Question.module.css'
import Answer from './Answer'
import CountDown from './CountDown'
import Statement from './Statement'

interface QuestionProps {
  value: QuestionModel
  onAnswer: (index: number) => void
  onComplete: () => void
}

const letters = [
  {
    value: `A`,
    color: '#f2c866'
  },
  {
    value: `B`,
    color: '#f266ba'
  },
  {
    value: `C`,
    color: '#85d4f2'
  },
  {
    value: `D`,
    color: '#bce596'
  }
]

export default function Question(props: QuestionProps) {
  const question = props.value
  const Answers = () =>
    question.answers.map((answer, i) => (
      <Answer
        key={i}
        value={answer}
        index={i}
        letter={letters[i].value}
        color={letters[i].color}
        onAnswer={props.onAnswer}
      />
    ))

  return (
    <div className={styles.question}>
      <Statement text={question.statement} />
      <CountDown duration={10} onComplete={props.onComplete} />
      {Answers()}
    </div>
  )
}
