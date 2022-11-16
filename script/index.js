const tblLogin = document.getElementById("tblLogin")
let user = null;


function cekLocalStorage(){
    let cekUser = localStorage.getItem('loginAja');
    if(cekUser == "benar"){
        user = JSON.parse(localStorage.getItem('dataUser'));
    } else{
        user = JSON.parse(sessionStorage.getItem('dataUser'));
    }
}


window.onload = function(e) {
    cekLocalStorage()
    if (user === null) {
        console.log(user)
        document.getElementById('thisUser').remove();
    }
}

window.onload = function(e){
    cekLocalStorage()
    if(user != null){
        // hapus tombol login
        document.getElementById('btnLogin').remove();
        if (user != null) {
            let thisUser = document.getElementById("thisUser")
            localStorage.getItem("partnerChoose");
            console.log(user)

            thisUser.innerHTML = `<a class="btn btn-primary" disabled type="button">`+user.username+`</a>
            <button class="btn btn-danger" onclick="logout()" type="button">Logout</button>`
        }
    }}
    
function logout() {
    localStorage.removeItem("dataUser")
    console.log(user)
    if(user =! null){
        alert("Are you sure logout ?")
        window.location.href= "index.html"
    } 
}
