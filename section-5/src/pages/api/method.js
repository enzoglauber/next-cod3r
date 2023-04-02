// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json({
      method: req.method,
      name: 'Pedro'
    })
  } else {
    res.status(200).json({
      method: req.method,
      name: 'Maria'
    })
  }
}
