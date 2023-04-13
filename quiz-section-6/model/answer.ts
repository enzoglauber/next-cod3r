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

  toObject() {
    return {
      value: this.#value,
      right: this.#right,
      showed: this.#showed
    }
  }
}
