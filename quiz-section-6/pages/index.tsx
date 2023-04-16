import Question from '../components/Question'
import AnswerModel from '../model/answer'
import QuestionModel from '../model/question'

export default function Home() {
  const question = new QuestionModel(306, 'Qual bicho transmite a Doença de Chagas?', [
    AnswerModel.wrong('Abelha'),
    AnswerModel.wrong('Barata'),
    AnswerModel.wrong('Pulga'),
    AnswerModel.right('Barbeiro')
  ])

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Question value={question} />
    </div>
  )
}
