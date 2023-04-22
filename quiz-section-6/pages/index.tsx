import { useEffect, useState } from 'react'
import Quiz from '../components/Quiz'
import QuestionModel from '../model/question'

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const [questions, setQuestions] = useState<number[]>([])
  const [question, setQuestion] = useState<QuestionModel>(null)
  const [rights, setRights] = useState<number>(0)

  const fetchQuestions = async () => {
    const response = await fetch(`${BASE_URL}/quiz`)
    const questions = await response.json()
    setQuestions(questions)
  }

  const fetchQuestion = async (id: number) => {
    const response = await fetch(`${BASE_URL}/question/${id}`)
    const question = await response.json()
    setQuestion(QuestionModel.fromObject(question))
  }

  useEffect(() => {
    fetchQuestions()
  }, [])

  useEffect(() => {
    questions.length > 0 && fetchQuestion(questions[0])
  }, [questions])

  const handleAnswer = (question: QuestionModel) => {
    const add = rights + (question.right ? 1 : 0)
    setQuestion(question)
    setRights(add)
  }

  const handleNextStep = () => {
    // setQuestion(question.answerWith(index))
  }

  return (
    <Quiz question={question} last={true} onAnswer={handleAnswer} onNextStep={handleNextStep} />
  )
}
