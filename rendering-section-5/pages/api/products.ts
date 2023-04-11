function randomNumber(min = 1, max = 100000) {
  return parseInt(`${Math.random() * (max - min) + min}`)
}

export default function products(req, res) {
  res.status(200).json([
    { id: randomNumber(), name: 'Blue Pen', value: 5.3 },
    { id: randomNumber(), name: 'Journal', value: 2.3 },
    { id: randomNumber(), name: 'Eraser', value: 1.96 },
    { id: randomNumber(), name: 'Scissor', value: 7.78 }
  ])
}
