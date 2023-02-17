const { FAQ } = require('../db/sequelize')
  
module.exports = (app) => {
  app.post('/api/FAQ', (req, res) => {
    FAQ.create(req.body)
      .then(faq => {
        const message = `La FAQ ${req.body.name} a bien été crée.`
        res.json({ message, data: faq })
      })
  })
}