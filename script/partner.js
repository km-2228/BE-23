const getDataApi = () => {
  const URL = "https://634edef8df22c2af7b452cc0.mockapi.io/partners";

  fetch(URL)
    .then((response) => response.json())
    .then((result) => {
    let partner = document.getElementById("cardPartner");
    
    // console.log(result)
      
    // let dataPartner = result.results;
    result.forEach((data) => {
        partner.innerHTML +=
        `<div class="card rounded-4 shadow-sm text-white p-4 d-flex flex-column align-items-center thisCard">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="person" width="72" height="72" class="rounded-circle image-person" />
            <p class="fw-semibold my-1">`+data.name+`</p>
            <div class="text-start mx-auto">
              <p class="detail"><b>Pengalaman :</b> ${data.pengalaman}</p>
              <p class="detail"><b>Pendidikan :</b> `+data.pendidikan+`</p>
              <p class="detail"><b>Pendidikan :</b> `+data.lokasi+`</p>
              <p class="detail"><b>Pendidikan :</b> `+data.jenisKelamin+`</p>
            </div>
            <a type="button" class="btn btn-success rounded-5 mt-1 bg-warning text-dark fw-semibold" onclick="detailPartner(${data.id})">Lihat Detail</a>
          </div>`;
        });
    })
    .catch((error) => console.log(error));
}
getDataApi();



function setName() {
  let search = document.getElementById("search");
  let setSearch = search.value;
  const URL = "https://634edef8df22c2af7b452cc0.mockapi.io/partners?name="+setSearch;
  const remove = (sel) => document.querySelectorAll(sel).forEach((el) => el.remove());
  remove(".thisCard");

  fetch(URL)
    .then((response) => response.json())
    .then((result) => {
    let partner = document.getElementById("cardPartner");
    
    console.log(result);
    result.forEach((data) => {
      partner.innerHTML +=
        `<div class="card rounded-4 shadow-sm text-white p-4 d-flex flex-column align-items-center thisCard">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="person" width="72" height="72" class="rounded-circle image-person" />
            <p class="fw-semibold my-1">`+data.name+`</p>
            <div class="text-start mx-auto">
              <p class="detail"><b>Pengalaman :</b> `+data.pengalaman+`</p>
              <p class="detail"><b>Pendidikan :</b> `+data.pendidikan+`</p>
              <p class="detail"><b>Pendidikan :</b> `+data.lokasi+`</p>
              <p class="detail"><b>Pendidikan :</b> `+data.jenisKelamin+`</p>
            </div> 
            <button href="detail.html" id="showDetail" class="px-4 rounded-5 mt-1 bg-warning text-decoration-none text-dark fw-semibold border-danger border onclick="detail()"">Lihat Detail</button>
          </div>`;
      });
    })
    .catch((error) => console.log(error));

  if (setSearch == "") {
      getDataApi();
  }
}


function perempuan() {
  let perempuan = document.getElementById("perempuan")
  let setPerempuan = perempuan.value;
  const URL = 'https://634edef8df22c2af7b452cc0.mockapi.io/partners?filter=perempuan';

  fetch(URL)
    .then((response) => response.json())
    .then((result) => {
        // console.log(result)
      let partner = document.getElementById("cardPartner");
      const remove = (sel) => document.querySelectorAll(sel).forEach((el) => el.remove());
      remove(".thisCard");  
      
      // console.log(result);
      result.forEach((data) => {
        partner.innerHTML +=
          `<div class="card rounded-4 shadow-sm text-white p-4 d-flex flex-column align-items-center thisCard">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="person" width="72" height="72" class="rounded-circle image-person" />
              <p class="fw-semibold my-1">`+data.name+`</p>
              <div class="text-start mx-auto">
                <p class="detail"><b>Pengalaman :</b> `+data.pengalaman+`</p>
                <p class="detail"><b>Pendidikan :</b> `+data.pendidikan+`</p>
                <p class="detail"><b>Pendidikan :</b> `+data.lokasi+`</p>
                <p class="detail"><b>Pendidikan :</b> `+data.jenisKelamin+`</p>
              </div> 
              <a href="detail.html" id="showDetail" class="px-4 rounded-5 mt-1 bg-warning text-decoration-none text-dark fw-semibold border-danger border onclick="detail()"">Lihat Detail</a>
            </div>`;
        });
      })
      .catch((error) => console.log(error));

    if (setPerempuan  == "") {
        getDataApi();
    }
}


function laki() {
  let laki = document.getElementById("laki")
  let setLaki = laki.value;
  const URL = 'https://634edef8df22c2af7b452cc0.mockapi.io/partners?filter=laki - laki';

  fetch(URL)
    .then((response) => response.json())
    .then((result) => {
        // console.log(result)
      let partner = document.getElementById("cardPartner");
      const remove = (sel) => document.querySelectorAll(sel).forEach((el) => el.remove());
      remove(".thisCard");  
      
      // console.log(result);
      result.forEach((data) => {
        partner.innerHTML +=
          `<div class="card rounded-4 shadow-sm text-white p-4 d-flex flex-column align-items-center thisCard">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="person" width="72" height="72" class="rounded-circle image-person" />
              <p class="fw-semibold my-1">`+data.name+`</p>
              <div class="text-start mx-auto">
                <p class="detail"><b>Pengalaman :</b> `+data.pengalaman+`</p>
                <p class="detail"><b>Pendidikan :</b> `+data.pendidikan+`</p>
                <p class="detail"><b>Pendidikan :</b> `+data.lokasi+`</p>
                <p class="detail"><b>Pendidikan :</b> `+data.jenisKelamin+`</p>
              </div> 
              <a href="detail.html" id="showDetail" class="px-4 rounded-5 mt-1 bg-warning text-decoration-none text-dark fw-semibold border-danger border onclick="detail()"">Lihat Detail</a>
            </div>`;
        });
      })
      .catch((error) => console.log(error));

    if (setLaki  == "") {
        getDataApi();
    }
}


function lokasiBdg() {
  let bandung = document.getElementById("bandung")
  let setBdg = bandung.value;
  const URL = 'https://634edef8df22c2af7b452cc0.mockapi.io/partners?filter=bandung';

  fetch(URL)
    .then((response) => response.json())
    .then((result) => {
        // console.log(result)
      let partner = document.getElementById("cardPartner");
      const remove = (sel) => document.querySelectorAll(sel).forEach((el) => el.remove());
      remove(".thisCard");  
      
      // console.log(result);
      result.forEach((data) => {
        partner.innerHTML +=
          `<div class="card rounded-4 shadow-sm text-white p-4 d-flex flex-column align-items-center thisCard">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="person" width="72" height="72" class="rounded-circle image-person" />
              <p class="fw-semibold my-1">`+data.name+`</p>
              <div class="text-start mx-auto">
                <p class="detail"><b>Pengalaman :</b> `+data.pengalaman+`</p>
                <p class="detail"><b>Pendidikan :</b> `+data.pendidikan+`</p>
                <p class="detail"><b>Pendidikan :</b> `+data.lokasi+`</p>
                <p class="detail"><b>Pendidikan :</b> `+data.jenisKelamin+`</p>
              </div> 
              <a href="detail.html" id="showDetail" class="px-4 rounded-5 mt-1 bg-warning text-decoration-none text-dark fw-semibold border-danger border onclick="detail()"">Lihat Detail</a>
            </div>`;
        });
      })
      .catch((error) => console.log(error));

    if (setBdg  == "") {
        getDataApi();
    }
}


function lokasiYog() {
  let yogya = document.getElementById("yogya")
  let setYogya = yogya.value;
  const URL = 'https://634edef8df22c2af7b452cc0.mockapi.io/partners?filter=Yogyakarta';

  fetch(URL)
    .then((response) => response.json())
    .then((result) => {
        // console.log(result)
      let partner = document.getElementById("cardPartner");
      const remove = (sel) => document.querySelectorAll(sel).forEach((el) => el.remove());
      remove(".thisCard");  
      
      // console.log(result);
      result.forEach((data) => {
        partner.innerHTML +=
          `<div class="card rounded-4 shadow-sm text-white p-4 d-flex flex-column align-items-center thisCard">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="person" width="72" height="72" class="rounded-circle image-person" />
              <p class="fw-semibold my-1">`+data.name+`</p>
              <div class="text-start mx-auto">
                <p class="detail"><b>Pengalaman :</b> `+data.pengalaman+`</p>
                <p class="detail"><b>Pendidikan :</b> `+data.pendidikan+`</p>
                <p class="detail"><b>Pendidikan :</b> `+data.lokasi+`</p>
                <p class="detail"><b>Pendidikan :</b> `+data.jenisKelamin+`</p>
              </div> 
              <a href="detail.html" id="showDetail" class="px-4 rounded-5 mt-1 bg-warning text-decoration-none text-dark fw-semibold border-danger border onclick="detail()"">Lihat Detail</a>
            </div>`;
        });
      })
      .catch((error) => console.log(error));

    if (setYogya  == "") {
        getDataApi();
    }
}

function lokasiSby() {
  let surabaya = document.getElementById("surabaya")
  let setSby = surabaya.value;
  const URL = 'https://634edef8df22c2af7b452cc0.mockapi.io/partners?filter=Surabaya';

  fetch(URL)
    .then((response) => response.json())
    .then((result) => {
        // console.log(result)
      let partner = document.getElementById("cardPartner");
      const remove = (sel) => document.querySelectorAll(sel).forEach((el) => el.remove());
      remove(".thisCard");  
      
      // console.log(result);
      result.forEach((data) => {
        partner.innerHTML +=
          `<div class="card rounded-4 shadow-sm text-white p-4 d-flex flex-column align-items-center thisCard">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="person" width="72" height="72" class="rounded-circle image-person" />
              <p class="fw-semibold my-1">`+data.name+`</p>
              <div class="text-start mx-auto">
                <p class="detail"><b>Pengalaman :</b> ${data.pengalaman}</p>
                <p class="detail"><b>Pendidikan :</b> `+data.pendidikan+`</p>
                <p class="detail"><b>Pendidikan :</b> `+data.lokasi+`</p>
                <p class="detail"><b>Pendidikan :</b> `+data.jenisKelamin+`</p>
              </div> 
              <a href="detail.html" id="showDetail" class="px-4 rounded-5 mt-1 bg-warning text-decoration-none text-dark fw-semibold border-danger border onclick="detail()"">Lihat Detail</a>
            </div>`;
        });
      })
      .catch((error) => console.log(error));

    if (setSby  == "") {
        getDataApi();
    }
}

function detailPartner(id){
  const URL = 'https://634edef8df22c2af7b452cc0.mockapi.io/partners/' + id;
  fetch(URL)
    .then((response) => response.json())
    .then((result) => {
    console.log(result)
    var myJSON = JSON.stringify(result)
    localStorage.setItem( 'partnerChoose', myJSON );
      window.location.href = "./../public/detail.html";
    })
}

