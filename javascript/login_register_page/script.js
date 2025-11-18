function login() {
  alert("Login button clicked");
  const em = document.getElementById("LoginEmail").value;
  alert(em);
  const pass = document.getElementById("LoginPassword").value;
  alert(pass);
}
function register() {
  alert("Registeration button clicked");
  const name = document.getElementById("FullName").value;
  const em = document.getElementById("RegEmail").value;
  const pass = document.getElementById("RegPassword").value;
  const pass2 = document.getElementById("RegcPassword").value;
  if (pass == pass2) {
    alert("welcome password correct \n" + " email: " + em + " full name: " + name);
  } else {
    alert("wrong password");
  }
}
