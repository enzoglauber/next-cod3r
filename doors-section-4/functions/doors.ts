import DoorModel from '../model/door'

export function buildDoors(length: number, selected: number): DoorModel[] {
  return Array.from({ length }, (_, i) => {
    const sequence = i + 1
    const gift = sequence === selected

    return new DoorModel(sequence, gift)
  })
}

export function updateDoors(doors: DoorModel[], doorChanged: DoorModel): DoorModel[] {
  return doors.map((door) => {
    const changed = door.number === doorChanged.number
    if (changed) {
      return doorChanged
    } else {
      return doorChanged.opened ? door : door.unselect()
    }
  })
}
