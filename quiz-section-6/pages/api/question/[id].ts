export default function question(req, res) {
  const id = +req.query.id
  res.status(200).json({ id, name: 'John Doe' })
}
