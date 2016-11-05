var express = require('express');
var app = express();


app.get('/', function(req, res){
  res.send('Hello Nathan\n');
})

app.get('/home', function(req, res){
  res.send('THIS IS ANOTHER');
})

app.use('/static', express.static('public'));

app.listen(8080, function(){
  console.log('This is running on port 8080');
})
