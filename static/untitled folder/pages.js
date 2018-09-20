const HOME = `
  <div id="HOME" class="page">
    <h2> mamma </h2>
    <button onClick="draw('LOGIN')">Join the battle</button>
  </div>
`;

const LOGIN = `
  <div id="LOGIN" class="page">
    <p>Choose your Username and join the battle!</p>
    <p><input type="text" id="username" name="username" placeholder="username" onChange="saveUsername(this.value)"/></p>
    <p><button onClick="tryLogin()">Join</button>
  </div>
`;

const pages = {
  HOME,
  LOGIN,
}
