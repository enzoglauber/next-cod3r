export default (req, res) => {
  res.status(200).send({
    params: req.query
  }) 
}