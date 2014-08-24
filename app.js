var express             = require('express'),
    app                 = express(),
    server              = require("http").createServer(app),
    http                = require('http'),
    bodyParser          = require('body-parser');


app.set('port', 3000);
server.listen(3000);

app.use(express.static(__dirname + "/public"));
app.use(bodyParser());
app.use(bodyParser.json());

app.set('view', __dirname + "/views");
app.set('view engine', 'jade');
app.set('view options', {layout: true});

require('./apis/wikiapi.js');