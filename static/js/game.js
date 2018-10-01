var socket = io();
socket.on('message', data => console.log(data));

socket.emit('NEW_PLAYER', {username: 'test'});

socket.on('UPDATED_NUMBER', data => document.getElementById('number').innerText = data.number );

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

function init() {
  getJSON('/number',
  function(err, data) {
    if (err !== null) {
      alert('Something went wrong: ' + err);
    } else {
      document.getElementById('number').innerText = data.number;
    }
  });
}

init();
