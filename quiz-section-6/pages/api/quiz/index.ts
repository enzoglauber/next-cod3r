import questions from '../../seed/question'

export default function quiz(req, res) {
  res.status(200).send(questions.map((question) => question.id))
}
