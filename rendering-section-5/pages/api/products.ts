export default function products(req, res) {
  res.status(200).json([
    { id: 1, name: 'Blue Pen', value: 5.3 },
    { id: 2, name: 'Journal', value: 2.3 },
    { id: 3, name: 'Eraser', value: 1.96 },
    { id: 4, name: 'Scissor', value: 7.78 }
  ])
}
