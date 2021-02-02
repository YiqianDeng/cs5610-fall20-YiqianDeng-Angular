const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/cs5610-fall20-yiqian-deng-client-angular'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/cs5610-fall20-yiqian-deng-client-angular/index.html'));});
app.listen(process.env.PORT || 8080);
