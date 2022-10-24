const URL = 'https://634edef8df22c2af7b452cc0.mockapi.io/users';
const addUsername = document.getElementById("addUsername");
const addEmail = document.getElementById("addEmail");
const addPassword = document.getElementById("addPassword");
let user = null;
// const btnRegister = document.getAnimations("btnRegister");


function register() {
    username = addUsername.value;
    email = addEmail.value;
    password = addPassword.value;

    let formData = {
        username, email, password
    }
    async function postData(url = "", data) {
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
        localStorage.setItem('loginAja',"benar");
        // localStorage.setItem('dataUser',JSON.stringify(dataUser));
        alert("Success Register")
        window.location.href = "./../index.html";

      });
}

function cekLocalStorage(){
  let cekUser = localStorage.getItem('loginAja');
  if(cekUser == "benar"){
      user = JSON.parse(localStorage.getItem('dataUser'));
  } else{
      user = JSON.parse(sessionStorage.getItem('dataUser'));
  }
}

// window.onload = function(){
//   cekLocalStorage()
//   if(user != null){
//       window.location.href = "./../index.html";
//   }
// }
// register()