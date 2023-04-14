// import { embaralhar } from '../functions/arrays'
import { shuffle } from '../functions/shuffle'
import AnswerModel from './answer'

export default class QuestionModel {
  #id: number
  #statement: string
  #answers: AnswerModel[]
  #right: boolean

  constructor(id: number, statement: string, answers: AnswerModel[], right = false) {
    this.#id = id
    this.#statement = statement
    this.#answers = answers
    this.#right = right
  }

  get id() {
    return this.#id
  }

  get statement() {
    return this.#statement
  }

  get answers() {
    return this.#answers
  }

  get right() {
    return this.#right
  }

  get notAnswered() {
    return !this.answered
  }

  get answered() {
    for (let answer of this.#answers) {
      if (answer.showed) return true
    }
    return false
  }

  shuffleAnswers(): QuestionModel {
    let shuffled = shuffle(this.#answers)
    return new QuestionModel(this.#id, this.#statement, shuffled, this.#right)
  }

  toObject() {
    return {
      id: this.#id,
      statement: this.#statement,
      answered: this.answered,
      right: this.#right,
      answers: this.#answers.map((answer) => answer.toObject())
    }
  }
}
