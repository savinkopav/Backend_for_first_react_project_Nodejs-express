require('express-async-errors');
const winston = require('winston');
//require('winston-mongodb');

module.exports = function () {
    winston.exceptions.handle(
        new winston.transports.Console({colorize: true, prettyPrint: true}),
        new winston.transports.File({filename: 'unCaughtExceptions.log'}));
    process.on('unhandledRejection', (ex)=>{
        throw ex;
    });
// noinspection JSValidateTypes
    winston.add(new winston.transports.File({filename: 'logfile.log'}))};
    //winston.add(new winston.transports.MongoDB({
      //  db: 'mongodb://localhost/vidly',
       // level: 'info'
    //}));
//};