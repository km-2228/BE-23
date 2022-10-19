const getDataApi = () => {
    const URL = "https://634edef8df22c2af7b452cc0.mockapi.io/partners";

    fetch(URL)
        .then((response) => response.json())
        .then((result) => {
        let partner = document.getElementById("cardPartner");
        
        console.log(result)
        
        let dataPartner = result.results;
        dataPartner.forEach((data) => {
            partner.innerHTML +=
                `<div class="card rounded-4 shadow-sm text-white pt-4 px-2 pb-2 d-flex flex-column align-items-center">
                    <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                    alt="person"
                    width="72"
                    height="72"
                    class="rounded-circle image-person"
                    />
                <p class="fw-semibold my-1">`+data.name+`</p>
                <div class="wrapper-stars d-flex align-items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" fill="rgba(224,224,224,1)" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" fill="rgba(224,224,224,1)" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" fill="rgba(224,224,224,1)" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" fill="rgba(224,224,224,1)" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z"
                      fill="rgba(224,224,224,1)"
                    />
                  </svg>
                </div>
                <p class="month my-2"><b>Pengalaman :</b> `+data.pengalaman+`</p>
                <p class="month my-2"><b>Pendidikan :</b> `+data.pendidikan+`</p>
                <a href="detail.html" class="px-4 rounded-5 mt-1 bg-warning text-decoration-none text-dark fw-semibold border-danger border">Lihat Detail</a>`;
            });
        })
        .catch((error) => console.log(error));
}
getDataApi();