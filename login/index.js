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


