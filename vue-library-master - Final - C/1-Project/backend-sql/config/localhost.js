const os = require('os');

module.exports = {
  env: 'localhost',
/* 
    database: {
    username: 'postgres',
    dialect: 'postgres',
    password: '',
    database: 'apollodb',
    host: 'localhost',
    logging: console.log,
    operatorsAliases: false,
  }, */
/*
  database: {
    username: 'root', // Use 'root' for XAMPP MySQL
    dialect: 'mysql', // Change dialect to 'mysql' for XAMPP
    password: '', // Leave empty if you haven't set a password for XAMPP MySQL
    database: 'apollodbtest', // Your database name
    host: 'localhost', // Localhost for XAMPP
    logging: console.log,
    operatorsAliases: false,
  }, */


  database: {
    username: 'root', // Use 'root' for XAMPP MySQL
    dialect: 'mysql', // Change dialect to 'mysql' for XAMPP
    password: '', // Leave empty if you haven't set a password for XAMPP MySQL
    database: 'apollodbtest', // Your database name
    host: 'localhost', // Localhost for XAMPP
    logging: console.log,
    operatorsAliases: false,
    port: 3306, //Dont forget to put the port number
  },

  /* database: {
     username: 'root',
     dialect: 'mysql',
     password: '',
     database: 'apollodb',
     host: 'localhost',
     logging: console.log,
     operatorsAliases: false,
   }, */

    //search on web how to use google email as a smtp
  email: {
    comment: 'https://nodemailer.com',
    from: '', //add your email here
    host: 'smtp.gmail.com',
    port: 1, //add your port number here unique (3 numbers usually i think)
    auth: {
      user: '', //email again
      pass: '', //unique pass key
    },
  },

  graphiql: true,

  clientUrl: 'http://localhost:8081',

  defaultUser: '<insert your email here>',

  uploadDir: os.tmpdir(),

  authJwtSecret: '<5b1fb1e3-10e1-416f-8580-5ee4c1396733>',
};
