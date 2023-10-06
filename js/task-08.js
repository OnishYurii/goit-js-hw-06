const form = document.querySelector("form.login-form");

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;
  const alertMessage = "Please fill out all fields!";

  if (email === "" || password === "") {
    alert(alertMessage);
  } else {
    const formData = {
      email,
      password,
    };

    console.log(formData);

    form.reset();
  }
}
