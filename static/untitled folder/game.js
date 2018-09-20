var socket = io();
socket.on('message', data => console.log(data));

socket.emit('NEW_PLAYER', {username: 'test'});



