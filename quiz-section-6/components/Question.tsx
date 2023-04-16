import QuestionModel from '../model/question'
import styles from '../styles/Question.module.css'
import Answer from './Answer'
import Statement from './Statement'

interface QuestionProps {
  value: QuestionModel
}

export default function Question(props: QuestionProps) {
  const question = props.value
  const Answers = () =>
    question.answers.map((answer, i) => (
      <Answer key={i} value={answer} index={i} letter="A" color="#f2c866" />
    ))

  return (
    <div className={styles.question}>
      <Statement text={question.statement} />
      {Answers()}
    </div>
  )
}
