const URL = 'https://634edef8df22c2af7b452cc0.mockapi.io/users';
const addUsername = document.getElementById("addUsername");
const addEmail = document.getElementById("addEmail");
const addPassword = document.getElementById("addPassword");
// const btnRegister = document.getAnimations("btnRegister");


function register() {
    username = addUsername.value;
    email = addEmail.value;
    password = addPassword.value;

    let formData = {
        username, email, password
    }
    async function postData(url = "", data = {}) {
        const response = await fetch(url, {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(data),
        });
        return response.json();
      }

      postData(URL,formData)
      .then((data) => {
        console.log(data)
        alert("Success Register")
        window.location = "./../index.html";
      });
}
register()