export default function students(req, res) {
  const id = +req.query.id
  res.status(200).json({ id, name: `Blue Pen ${id}`, email: `blue${id}@bic.com.br` })
}
