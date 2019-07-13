//              _
//   __ _ _ __ (_)
//  / _` | '_ \| |
// | (_| | |_) | |
//  \__,_| .__/|_|
//      | _|


const express = require('express');

const router = express.Router();
const debug = require('debug')('api:request');

// Request logging
router.all('*', (request, response, next) => {
  debug(`${request.method} ${request.protocol}://${request.get('host')}${request.originalUrl}`);
  next();
});

// Main API

router.get('/example', (request, response) => {
  response.json({
    greeting: 'hello from the server!'
  });
});

module.exports = router;
