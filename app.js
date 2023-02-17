//Youtube : https://www.youtube.com/watch?v=NRxzvpdduvQ
const express=require("express")
//const morgan=require("morgan")
const favicon=require("serve-favicon")
const bodyParser=require("body-parser")
const cors = require("cors");
//const sequelize=require("./src/db/sequelize")

const app=express(); 

var corsOptions = {
   origin: '*',
   methods: ['GET', 'POST', 'PUT', 'DELETE'],
   allowedHeaders: ['Content-Type', 'Authorization'],
   credentials: true,
   maxAge: 86400,
   AllowOrigin: ["http://localhost"]
 };
 
 app.use(cors(corsOptions));

app.use(favicon(__dirname+'/favicon.ico'))
   //.use(morgan('dev'))
   .use(bodyParser.json())

//sequelize.initDB()
app.get('/',(req,res)=>{
   res.json("Hello, Heroku !")
})

require('./src/routes/findAllTour')(app)
require('./src/routes/findTourByPk')(app)
require('./src/routes/createTour')(app)
require('./src/routes/updateTour')(app)
require('./src/routes/deleteTour')(app)

require('./src/routes/findAllFAQ')(app)

require('./src/routes/login')(app)

app.use(({res})=>{
   const message='Impossible de trouver la ressource'
   res.status(404).json({message})
})

const port =process.env.PORT || 3000

app.listen(port,()=>console.log("demarré port "+port))