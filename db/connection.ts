import {  Sequelize } from 'sequelize';

const db = new Sequelize('', '','', {
  host: 'localhost',
  port: 3307,
  dialect: 'mysql',
  // logging: false,
});

export default db;
