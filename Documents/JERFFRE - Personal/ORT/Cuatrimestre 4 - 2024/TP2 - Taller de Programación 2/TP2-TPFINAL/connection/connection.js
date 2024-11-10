//conexion a la base de datos (usando sql server)

import { Sequelize } from "sequelize";


const connection = new Sequelize('TP2_TPFINAL', 'eze', 'eze1234', {
    host: 'localhost',
    dialect: 'mssql',
    port: 1433,
  });


  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


  export default connection;

  //REVISAR POR QUE NO CONECTA BIEN A LA BD