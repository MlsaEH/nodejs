const { Tour } = require('../db/sequelize')
const auth=require("../auth/auth")
  
module.exports = (app) => {
  app.get('/api/tour/:id',auth, (req, res) => {
    Tour.findByPk(req.params.id)
      .then(tour => {
        if (tour===null){
          const message = `Tournée n'existe pas`
          res.status(404).json({ message})
        }else{
          const message = 'Une tournée a bien été trouvée.'
          res.json({ message, data: tour })
        }
      })
      .catch(error=>{
        const message = 'Une tournée non trouvée.'
        res.status(500).json({ message, data: error })
      })
  })
}