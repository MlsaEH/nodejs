module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Tour', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
    toucode: {
        type: DataTypes.STRING,
        allowNull: false
      },
    toulib: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:{
          msg: "Le nom est déjà pris."
        },
        validate:{
          notEmpty: {msg: "Libellé obligatoire"},
          notNull: {msg:'Libellé obligatoire'}
        }
      },
    toujou: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
          isInt: {msg: "Entier seulement"},
          notNull:{msg:'Jour obligatoire'},
          max:{
            args: [7],
            msg: "jour 7 maxi"
          }
        }
      }    
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }