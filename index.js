const express = require('express');
const app = express();

require('./startup/logging')();
require('./startup/db')();
require('./startup/cors')(app);
require('./startup/routes')(app);
require('./startup/config')();
require('./startup/validation')();

const port = process.env.PORT || 3900;
const server = app.listen(port, () => console.log(`Listening on port ${port}...`));
module.exports = server;