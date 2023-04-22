import QuestionModel from '../model/question'
import styles from '../styles/Quiz.module.css'
import Button from './Button'
import Question from './Question'

interface QuizProps {
  question: QuestionModel
  last: boolean
  onAnswer: (question: QuestionModel) => void
  onNextStep: () => void
}

export default function Quiz({ question, onNextStep, last, ...props }: QuizProps) {
  const onAnswer = (index: number) => {
    if (question.notAnswered) {
      props.onAnswer(question.answerWith(index))
    }
  }

  return (
    <div className={styles.container}>
      {question ? (
        <Question value={question} duration={6} onAnswer={onAnswer} onComplete={onNextStep} />
      ) : (
        false
      )}

      <Button onClick={onNextStep} text={last ? 'Finish' : 'Next'} />
    </div>
  )
}
