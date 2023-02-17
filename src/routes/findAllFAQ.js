const { Faq } = require('../db/sequelize')

// const cors=require('cors');
// const corsOptions = {
//     origin: '*',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true,
//     maxAge: 86400,
//     AllowOrigin: ["http://localhost"]
//   };

module.exports = (app) => {
  app.get('/api/FAQ',(req, res) => {
    Faq.findAll()
      .then(faqs => {
        const message = 'La liste des FAQ a bien été récupérée.'
        res.json({ message, data: faqs })
      })
  })
}