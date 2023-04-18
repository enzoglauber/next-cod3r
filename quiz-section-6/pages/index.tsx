import { useState } from 'react'
import Question from '../components/Question'
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

  const handleAnswer = (index: number) => {
    console.log(index, 'index', question)
    setQuestion(question.answerWith(index))
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
      <Question value={question} onAnswer={handleAnswer} />
    </div>
  )
}
