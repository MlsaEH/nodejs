const { Tour } = require('../db/sequelize')
const auth=require("../auth/auth")
  
module.exports = (app) => {
  app.get('/api/tours',auth, (req, res) => {
    if(req.query.name){
      const toulib=req.query.name
      return Tour.findAll({where:{toulib:toulib}})
      .then(tour=>{
        const message =`Tournée correspondant à la recherche ${toulib}`
        res.json({ message, data: tour })
      })
    }
    Tour.findAll()
      .then(tours => {
        const message = 'La liste des tournées a bien été récupérée.'
        res.json({ message, data: tours })
      })
      .catch(error=>{
        const message=`Liste des tournées en erreur, réessayez plus tard`
        res.status(500).json({message,data:error})
      })
  })
}