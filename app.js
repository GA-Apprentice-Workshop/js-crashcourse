//
// # SimpleServer
var http = require('http'),
    path = require('path'),
    express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    app = express();

// ROUTE VARS
var routes  = require('./routes/game');

// ===================================================================
// CONFIGURE MIDDLEWARE
// ===================================================================

app.set('view engine', 'jade');
app.use(express.static(__dirname + '/client'));
app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':true}));

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("Server listening at", process.env.IP + ":" + process.env.PORT);
});
