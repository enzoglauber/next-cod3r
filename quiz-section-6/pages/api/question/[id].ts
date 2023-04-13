import questions from '../../seed/question'

export default function question(req, res) {
  const id = +req.query.id
  res.status(200).json(questions[0])
}
