import { useEffect, useState } from 'react'
import Quiz from '../components/Quiz'
import AnswerModel from '../model/answer'
import QuestionModel from '../model/question'

const mock = new QuestionModel(306, 'Qual bicho transmite a Doença de Chagas?', [
  AnswerModel.wrong('Abelha'),
  AnswerModel.wrong('Barata'),
  AnswerModel.wrong('Pulga'),
  AnswerModel.right('Barbeiro')
])

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const [questions, setQuestions] = useState<number[]>([])
  const [question, setQuestion] = useState(mock)

  const fetchQuestions = async () => {
    const response = await fetch(`${BASE_URL}/quiz`)
    const questions = await response.json()
    setQuestions(questions)
    console.log('questions', questions)
  }

  const fetchQuestion = async (id: number) => {
    const response = await fetch(`${BASE_URL}/question/${id}`)
    const question = await response.json()
    // setQuestion(question)
    console.log('question', question)
  }

  useEffect(() => {
    fetchQuestions()
  }, [])

  useEffect(() => {
    questions.length > 0 && fetchQuestion(questions[0])
  }, [questions])

  const handleAnswer = (question: QuestionModel) => {
    // setQuestion(question.answerWith(index))
  }

  const handleNextStep = () => {
    // setQuestion(question.answerWith(index))
  }

  return (
    <Quiz question={question} last={true} onAnswer={handleAnswer} onNextStep={handleNextStep} />
  )
}
