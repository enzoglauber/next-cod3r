import questions from '../../seed/question'

export default function question(req, res) {
  const id = +req.query.id

  const selected = questions.filter((question) => question.id === id)

  if (selected.length) {
    res.status(200).json(selected[0].toObject())
  } else {
    res.status(204).send()
  }
}
