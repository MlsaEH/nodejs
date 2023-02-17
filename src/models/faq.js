module.exports = (sequelize, DataTypes) => {
    return sequelize.define('FAQ', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
    question: {
        type: DataTypes.STRING,
        allowNull: false
      },
    answer: {
        type: DataTypes.STRING,
        allowNull: false
      }     
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }