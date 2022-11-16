const URL = 'https://634edef8df22c2af7b452cc0.mockapi.io/users';
const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");
let user = null;

// fungsi login
function login() {
    checkUserInWebStorage()
    const setEmail = inputEmail.value
    const setPassword = inputPassword.value;

    fetch(URL)
    .then((response) => response.json())
    .then(dataUser => {
        dataUser.forEach((data) => {
            if(data.email == setEmail && data.password == setPassword){
                var myJSON = JSON.stringify(data)
                localStorage.setItem( 'dataUser', myJSON );                
                console.log(data)
                alert("Success Login")
                window.location.href = "./../index.html";
            }
        })
    })
    .catch((error) => console.log(error));
}

function checkUserInWebStorage(){
    if(user !== ''){
        user = JSON.parse(localStorage.getItem('dataUser'));
    } else{
        user = JSON.parse(sessionStorage.getItem('dataUser'));
    }
}
