// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  if (req.method === 'GET') {
    get(req, res)
  } else {
    res.status(405).send()
  }
}

function get(req, res) {
  const id = req.query.id
  res.status(200).json({
    id,
    describe: "What's your favorite color?",
    answers: ['white', 'red', 'black', 'green']
  })
}
