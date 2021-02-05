//Prod server file.
// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const proxy = require('express-http-proxy');
const cors = require('cors');

const app = express();

//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

// Parsers for POST data
app.use(bodyParser.json({limit: '20mb'}));
app.use(bodyParser.urlencoded({ extended: false, limit: '20mb' }));

app.use(cors());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/countries-ui')));

// Set our api routes proxy to point to spring boot server
app.use('/server', proxy('https://localhost:8443', /*This lambda function is for handling https*/{
  proxyReqOptDecorator : function (proxyReqOpts, originalReq) {
    proxyReqOpts.rejectUnauthorized = false //to handle self signed certificate issue, for prod we should be using an actual certificate and disable this.
    return proxyReqOpts;
  }
}));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/countries-ui/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = '4200';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on ${port}`));
