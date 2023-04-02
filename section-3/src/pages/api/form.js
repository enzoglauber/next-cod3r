// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const users = []
export default (req, res) => {
  if (req.method === 'POST') {
    post(req, res)
  } else if (req.method === 'GET') {
    get(req, res)
  } else {
    res.status(405).send()
  }
}

function post(req, res) {
  const user = JSON.parse(req.body)
  users.push(user)

  res.status(200).send()
}

function get(req, res) {
  res.status(200).json(users)
}
