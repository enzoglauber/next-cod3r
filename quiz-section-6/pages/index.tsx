import { useState } from 'react'
import Quiz from '../components/Quiz'
import AnswerModel from '../model/answer'
import QuestionModel from '../model/question'
const mock = new QuestionModel(306, 'Qual bicho transmite a Doença de Chagas?', [
  AnswerModel.wrong('Abelha'),
  AnswerModel.wrong('Barata'),
  AnswerModel.wrong('Pulga'),
  AnswerModel.right('Barbeiro')
])

export default function Home() {
  const [question, setQuestion] = useState(mock)

  const handleAnswer = (question: QuestionModel) => {
    // setQuestion(question.answerWith(index))
  }

  const handleNextStep = () => {
    // setQuestion(question.answerWith(index))
  }

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Quiz question={question} last={true} onAnswer={handleAnswer} onNextStep={handleNextStep} />
    </div>
  )
}
