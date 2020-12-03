const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

app.disable('x-powered-by');
  app.use(express.static(path.join(__dirname, 'build')));
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  app.listen(
    process.env.PORT || 5000,
    function () {
      console.log(`Frontend start on http://localhost:5000`)
 applicationCach