import { useEffect, useState } from "react"

export default function question() {
  const [question, setQuestion] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/api/question/123')
      .then(res => res.json())
      .then(json => setQuestion(json))
  }, [])

  const renderAnswers = () => {
    if (!question) return false
    return question.answers.map((answer, i) => (
      <li key={answer+i}>{answer}</li>
    ))
  }

  return (
    <div>
      <h1>Question Index</h1>
      {/* {JSON.stringify(question, null, 2)} */}
      {question?.describe}
      <ul>
        {renderAnswers()}
      </ul>
    </div>
  )
}