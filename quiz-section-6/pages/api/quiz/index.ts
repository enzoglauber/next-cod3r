import { shuffle } from '../../../functions/shuffle'
import questions from '../../seed/question'

export default function quiz(req, res) {
  const data = questions.map((question) => question.id)
  res.status(200).send(shuffle(data))
}
