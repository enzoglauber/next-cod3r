import QuestionModel from '../model/question'
import styles from '../styles/Quiz.module.css'

interface QuizProps {
  question: QuestionModel
}

export default function Quiz({ question }: QuizProps) {
  console.log(question, `question`)
  return <div className={styles.container}>Quiz</div>
}
