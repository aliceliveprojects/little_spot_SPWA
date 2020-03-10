const express = require('express');
const http = require('http')
const path = require('path');
var fs = require('fs');

const app = express();

app.use(express.static(path.join(__dirname, '')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname + req.url));
});

app.get('/little_spot_SPWA/*', (req, res, next) => {
  let reqPath = req.url.split("little_spot_SPWA")[1];
  if (req.query.hasOwnProperty("code")) {
    reqPath = reqPath.split("?")[0];
    res.sendFile(path.join(__dirname + "/js/app_specific/callback" + reqPath));
  } else if (reqPath === "/auth-secure") {
    res.sendFile(path.join(__dirname + "/js/app_specific/authenticate/authenticate.secure.html"));
  } 
  else {
    res.sendFile(path.join(__dirname + reqPath));
  }
});

const port = process.env.PORT || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`running on port ${port}`));