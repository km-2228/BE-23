const URL = 'https://634edef8df22c2af7b452cc0.mockapi.io/users';
const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");


// fungsi login
function login() {
    const setEmail = inputEmail.value
    const setPassword = inputPassword.value;

    fetch(URL)
    .then((response) => response.json())
    .then(result => {
        // console.log(index)
        let dataUsers = result.results;
        dataUsers.forEach((data) => {
            if(data.email == setEmail && data.password == setPassword){
                alert("Success Login")
                window.location = "./../index.html"
            }
            else{
                alert("invalid login")
                location.reload()  
            }
        })
    })
}
// login()

  