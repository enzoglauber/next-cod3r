import QuestionModel from '../model/question'
import styles from '../styles/Question.module.css'
import Answer from './Answer'
import Statement from './Statement'

interface QuestionProps {
  value: QuestionModel
  onAnswer: (index: number) => void
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
        onAnswer={(index) => console.log(index)}
      />
    ))

  return (
    <div className={styles.question}>
      <Statement text={question.statement} />
      {Answers()}
    </div>
  )
}
