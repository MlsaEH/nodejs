const { Tour } = require('../db/sequelize')
const auth=require("../auth/auth")

module.exports = (app) => {
  app.delete('/api/tours/:id',auth, (req, res) => {
    Tour.findByPk(req.params.id).then(tour=>{
        if(tour===null){
            const message = 'Une tournée non créée.'
            return res.status(404).json({ message})
        }
        const tourDeleted=tour;
        return Tour.destroy({
            where: {id:tour.id}
        })
        .then(_=>{
            const message = `La tournées ${tourDeleted.toulib}a bien été supprimée`
            res.json({ message, data: tourDeleted })
        })
    })
    .catch(error=>{
        const message = 'Une tournée non trouvée.'
        res.status(500).json({ message, data: error })
      })
  })
}