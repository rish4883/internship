baseUrl = "http://localhost:3001/login"

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", login);


function login(event) {
  event.preventDefault();
  const loginInput = document.getElementById('login').value;
  const password = document.getElementById('password').value;

  axios.get(baseUrl).then((res) => {
    const users = res.data;
    console.log(users);
    
    const user = users.find(user => {
      return user.email == loginInput || user.username == loginInput
    });

    if (!user) {
      alert("User doesnt exit, create a new account")
      loginForm.reset();
      return;
    }
    if (password == user.password) {
      loginForm.reset();
      alert("Logged in")
      
    } else {
      alert("wrong password, reneter")
      
    }
  })

}

function togglePassword() {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.querySelector(".toggle-password");
  const isPassword = passwordInput.getAttribute("type") === "password";

  passwordInput.setAttribute("type", isPassword ? "text" : "password");
  toggleIcon.classList.toggle("fa-eye");
  toggleIcon.classList.toggle("fa-eye-slash");
}




document.querySelector(".create-account button").addEventListener("click", createAccountForm);

function createAccountForm() {
  const loginCard = document.querySelector('.login-card');
  loginCard.innerHTML = `
    <h1>Create Account</h1>
    <p>Register to Student Management Dashboard</p>
    <form id="register-form" onsubmit="register(event)">
      <div class="form-group">
        <label for="new-username">Username</label>
        <i class="fa-solid fa-user"></i>
        <input type="text" id="new-username" placeholder="Choose a username" required>
      </div>
      <div class="form-group">
        <label for="new-email">Email</label>
        <i class="fa-solid fa-envelope"></i>
        <input type="email" id="new-email" placeholder="example@email.com" required>
      </div>
      <div class="form-group">
        <label for="new-password">Password</label>
        <i class="fa-solid fa-lock"></i>
        <input type="password" id="password" placeholder="Create a password" required>
        <i class="fa-solid fa-eye toggle-password" onclick="togglePassword()"></i>
      </div>
      <button type="submit">Register</button>
    </form>
    <div class="create-account">
      <p>Already have an account?</p>
      <button onclick="location.reload()">Back to Login</button>
    </div>
  `;

  // document.getElementById("register-form").addEventListener("submit", register);
}


function register(e) {
  e.preventDefault;
  const loginCard = document.querySelector('.login-card');
  let username = document.getElementById("new-username").value;
  let email = document.getElementById("new-email").value;
  let password = document.getElementById("password").value;
  let newUser = {username, email, password}
  console.log(newUser)
  axios.post(baseUrl, newUser)

  loginCard.innerHTML = `
    <h1>Account Created!</h1>
    <p>Your student account has been successfully created.</p>
    <div style="text-align: center; margin-top: 2rem;">
      <button onclick="location.reload()">Back to Login</button>
    </div>
  `;

}

