var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.set('port', 5000);
console.log(__dirname);
app.use('/static', express.static(__dirname + '/static'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'static/index.html'));
});

let players = {};

io.on('connection', socket => {
	socket.on('NEW_PLAYER', (data) => {
		players[socket.id] = {
			username: data.username,
			colors: [ 'red', 'green', 'blue'],
		};
		console.log(players);
	});

	socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
		delete players[socket.id];
  });
});


server.listen(5000, () => console.log('Starting server on port 5000') );
