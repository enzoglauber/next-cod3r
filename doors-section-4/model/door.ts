export default class DoorModel {
  #number: number
  #gift: boolean
  #selected: boolean
  #opened: boolean

  constructor(number: number, gift = false, selected = false, opened = false) {
    this.#number = number
    this.#gift = gift
    this.#selected = selected
    this.#opened = opened
  }

  get number() {
    return this.#number
  }
  get gift() {
    return this.#gift
  }
  get selected() {
    return this.#selected
  }
  get opened() {
    return this.#opened
  }

  toggle() {
    const selected = !this.selected
    return new DoorModel(this.number, this.gift, selected, this.opened)
  }

  open() {
    const opened = true
    return new DoorModel(this.number, this.gift, this.selected, opened)
  }

  unselect() {
    const selected = false
    return new DoorModel(this.number, this.gift, selected, this.opened)
  }
}
