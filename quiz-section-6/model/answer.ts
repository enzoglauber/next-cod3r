export default class AnswerModel {
  #value: string
  #right: boolean
  #showed: boolean

  constructor(value: string, right: boolean, showed = false) {
    this.#value = value
    this.#right = right
    this.#showed = showed
  }

  static right(value: string) {
    return new AnswerModel(value, true)
  }

  static wrong(value: string) {
    return new AnswerModel(value, false)
  }

  get value() {
    return this.#value
  }

  get right() {
    return this.#right
  }

  get showed() {
    return this.#showed
  }

  get hidded() {
    return !this.showed
  }

  show() {
    return new AnswerModel(this.#value, this.#right, true)
  }

  static fromObject(answer: AnswerModel): AnswerModel {
    return new AnswerModel(answer.value, answer.right, answer.showed)
  }

  toObject() {
    return {
      value: this.#value,
      right: this.#right,
      showed: this.#showed
    }
  }
}
