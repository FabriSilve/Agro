// PAGE MANAGER

function draw(id) {
  document.getElementById('main').innerHTML = pages[id];
}

draw('HOME');


// LOGIC

let username = '';

function saveUsername(input) {
  username = input;
}

function tryLogin() {
  console.log(username);
}
