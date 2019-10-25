const winston = require('winston');
module.exports = function (err,req,res,next) {
    winston.error(err.message[0], err);
    res.status(500).send('Something failed')
};