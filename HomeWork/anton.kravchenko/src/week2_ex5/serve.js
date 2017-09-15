var express = require('express');
var app = express();

app.use(express.static('build'));
app.use('/images', express.static('images'));

var port = 3010;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});