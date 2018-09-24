// PAGE MANAGER

function draw(id) {
  document.getElementById('main').innerHTML = document.getElementById(id).innerHTML;
}

draw('home');

// LOGIC

let username = '';

function saveUsername(input) {
  username = input;
}

function tryLogin() {
  console.log(username);
}
