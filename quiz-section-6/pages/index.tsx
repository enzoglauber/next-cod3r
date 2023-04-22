import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Quiz from '../components/Quiz'
import QuestionModel from '../model/question'

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const [questions, setQuestions] = useState<number[]>([])
  const [question, setQuestion] = useState<QuestionModel>(null)
  const [rights, setRights] = useState<number>(0)
  const router = useRouter()

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

  //
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

  const nextQuestion = () => {
    const next = questions.indexOf(question.id) + 1
    return questions[next]
  }

  const goToNextQuestion = (id: number) => {
    fetchQuestion(id)
  }

  const finish = () => {
    router.push({
      pathname: '/result',
      query: {
        total: questions.length,
        rights
      }
    })
  }

  const handleNextStep = () => {
    const next = nextQuestion()
    next ? goToNextQuestion(next) : finish()
  }

  return question ? (
    <Quiz
      question={question}
      last={nextQuestion() === undefined}
      onAnswer={handleAnswer}
      onNextStep={handleNextStep}
    />
  ) : (
    false
  )
}
