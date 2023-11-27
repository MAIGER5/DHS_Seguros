require('dotenv').config();
const { Sequelize } = require('sequelize');

const functionContacto = require('./models/ContactModels')
const functionVideo = require('./models/VideoModels')

const {
    DB_USER, 
    DB_PASSWORD, 
    DB_HOST, 
    DB_NAME
  } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging:false,
    native:false,
});

functionContacto(sequelize)
functionVideo(sequelize)

const { Contact, Video } = sequelize.models;

async function testPostgreSQLConnection() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
      // Resto de la lógica de tu aplicación
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
   
  testPostgreSQLConnection();
  
  
  module.exports = {
      ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
      conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
  };