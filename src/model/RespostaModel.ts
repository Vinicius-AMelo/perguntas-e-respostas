import Sequelize from 'sequelize'
import sequelizeConnection from './database'

const RespostaModel = sequelizeConnection.define('respostas', {
  corpo: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  perguntaID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
})

export default RespostaModel
