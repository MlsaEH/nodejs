const { Tour } = require('../db/sequelize')
const { ValidationError}=require("sequelize")
const auth=require("../auth/auth")
  
module.exports = (app) => {
  app.put('/api/tours/:id',auth, (req, res) => {
    const id = req.params.id
    Tour.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return Tour.findByPk(id).then(tour => {
        if(tour===null){
          const message = 'Une tournée non modifiée.'
          return res.status(404).json({ message})
        }
        const message = `La tournée ${tour.toulib} a bien été modifiée.`
        res.json({message, data: tour })
      })
    })
    .catch(error=>{
      if(error instanceof ValidationError){
        return res.status(400).json({ message:error.message, data: error })
      }
      if(error instanceof UniqueConstraintError){
        return res.status(400).json({ message:error.message, data: error })
      }
      const message = 'Une tournée non modifée.'
      res.status(500).json({ message, data: error })
    })
  })
}