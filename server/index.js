const express = require('express');
const path = require('path');
const https = require('https')
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 443;
const key = fs.readFileSync('./key.pem');
const cert = fs.readFileSync( './server.crt' );

const options = {
  key: key,
  cert: cert,
};

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../ui/build')));

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response, next) {
  response.sendFile(path.resolve(__dirname, '../ui/build', 'index.html'));
});

https.createServer(options, app).listen(443);
