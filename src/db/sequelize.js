const {Sequelize, DataTypes}=require("sequelize")
const TourModel=require('../models/tour')
const FaqModel=require('../models/faq')
const UserModel=require('../models/user')
//let pokemons=require("./mock-pokemon");

const sequelize=new Sequelize(
    'TestEH',
    'sa',
    'P@ssw0rd',
    {
        host: 'winsql2019',
        dialect:'mssql'
    }
)

const Tour=TourModel(sequelize,DataTypes) 
const Faq=FaqModel(sequelize,DataTypes) 
const User=UserModel(sequelize,DataTypes) 
const bcrypt=require("bcrypt")

const initDB=()=>{
    return sequelize.sync({force:false}) 
        // .then(_=>{ 
        //         // pokemons.map(pokemon=>{
        //         // Tour.create({
        //         //     toucode: pokemon.id,
        //         //     toulib: pokemon.name
        //         //     }).then(tour=>console.log(tour.toJSON())) 
        //         // }),
        //         pokemons.map(pokemon=>{
        //             Faq.create({
        //                 question: faq.id,
        //                 answer: pokemon.name
        //                 }).then(faq=>console.log(faq.toJSON())) 
        //             })
        //     }
        // )
        .then(_=>{
            bcrypt.hash("CHEF",10)
            .then(hash=>{
                User.create({username:'MLSA',password:hash})
                .then(user=>console.log(user.toJSON()))
            })
        })
}
 
module.exports={initDB,Tour,Faq,User}