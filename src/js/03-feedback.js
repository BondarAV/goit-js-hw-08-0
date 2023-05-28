const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

if (JSON.parse(localStorage.getItem("feedback-form-state")) === null) {
  let storageObject = {
    email: "",
    message: "",
  };

  form.addEventListener(
    "input",
    _.throttle((event) => {
      storageObject[event.target.name] = event.target.value;
      localStorage.setItem(
        "feedback-form-state",
        JSON.stringify(storageObject)
      );
    }, 500)
  );

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };

    console.log(formData);

    localStorage.removeItem("feedback-form-state");
    storageObject.email = "";
    storageObject.message = "";

    emailInput.value = "";
    messageInput.value = "";
  });
} else {
  let storageObject = JSON.parse(localStorage.getItem("feedback-form-state"));

  function setDefaultInput(inputType, inputName) {
    document.querySelector(`${inputType}[name="${inputName}"]`).defaultValue =
      JSON.parse(localStorage.getItem("feedback-form-state"))[inputName];
  }

  setDefaultInput("input", "email");
  setDefaultInput("textarea", "message");

  form.addEventListener(
    "input",
    _.throttle((event) => {
      storageObject[event.target.name] = event.target.value;
      localStorage.setItem(
        "feedback-form-state",
        JSON.stringify(storageObject)
      );
    }, 500)
  );

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };

    console.log(formData);

    localStorage.removeItem("feedback-form-state");
    storageObject.email = "";
    storageObject.message = "";

    emailInput.value = "";
    messageInput.value = "";
  });
}
