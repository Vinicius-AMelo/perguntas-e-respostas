import Sequelize from 'sequelize'
import sequelizeConnection from './database'

const PerguntaModel = sequelizeConnection.define('perguntas', {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
})

export default PerguntaModel
