document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  let isValid = true;


  [name, email, password].forEach(input => setError(input, false));


  if (!name.value.trim()) {
    setError(name, true);
    isValid = false;
  }


  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.value.trim())) {
    setError(email, true);
    isValid = false;
  }


  if (password.value.length < 8) {
    setError(password, true);
    isValid = false;
  }

  if (isValid) {
    alert("Login Successful!");
    this.reset();
  }
});

function setError(element, show) {
  if (show) {
    element.classList.add("is-invalid");
  } else {
    element.classList.remove("is-invalid");
  }
}
