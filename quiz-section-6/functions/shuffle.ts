export function shuffle(array: any[]): any[] {
  return array
    .map((value) => ({ value, random: Math.random() }))
    .sort((object1, object2) => object1.random - object2.random)
    .map((object) => object.value)
}
