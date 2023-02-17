const { Tour } = require('../db/sequelize')
const { ValidationError, UniqueConstraintError}=require("sequelize")
const auth=require("../auth/auth")

module.exports = (app) => {
  app.post('/api/tours',auth, (req, res) => {
    Tour.create(req.body)
      .then(tour => {
        const message = `La tournée ${req.body.name} a bien été crée.`
        res.json({ message, data: tour })
      })
      .catch(error=>{
        if(error instanceof ValidationError){
          return res.status(400).json({ message:error.message, data: error })
        }
        if(error instanceof UniqueConstraintError){
          return res.status(400).json({ message:error.message, data: error })
        }
        const message = 'Une tournée non créée.'
        res.status(500).json({ message, data: error })
      })
  })
}