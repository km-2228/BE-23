// var data = localStorage.getItem('parterChoose');
// console.log(data);

// const displayDetail = (data) => {
//     for(let i=0; i<data.length; i++) {
//         const target = localStorage.getItem("partnerChoose");
//         if(data[i].id == target) {
//             detailPartner(data[i]);
//         }
//     }
// }

const detailPartner = () => {
    let partner = document.getElementById("detailPartner");
    localStorage.getItem("partnerChoose");
    const item = JSON.parse(localStorage.getItem('partnerChoose'));

    console.log(item)

    partner.innerHTML =
    `<div class="row my-4 p-3">
        <div class="col-md-3">
            <img src="https://picsum.photos/200/300?random=1" class="rounded" />
            <div class="ratings pt-2">
            <p class=""><b>`+item?.rating+`</b></p>
            </div>
        </div>
        <div class="col-md-9">
            <h1>`+item.name+`</h1>
            <p>`+item.deskripsi+`</p>
            <ul>
              <li>
                <p>Pengalaman : <strong>`+item.pengalaman+`</strong></p>
              </li>
              <li>
                <p>Pendidikan : <strong>`+item.pendidikan+`</strong></p>
              </li>
              <li>
                <p>Lokasi : <strong>`+item.lokasi+`</strong></p>
              </li>
            </ul>
            <div class="sosmed">
            <a href="#"><i class="fab fa-twitter px-2"></i></a>
            <a href="#"><i class="fab fa-instagram px-2"></i></a>
            <a href="#"><i class="fab fa-facebook px-2"></i></a>
            </div>
            <br/>
            <a href="https://api.whatsapp.com/send/?phone=087809680106&text&type=phone_number&app_absent=0" target="_blank" class="btn btn-warning rounded-5" tabindex="-1" role="button" aria-disabled="true" ><i class="fab fa-whatsapp"></i> Contact Now</a>
        </div>
    </div> 
    
    <footer class="text white pt-5 pb-4 gradient-background">
    <div class="container review">
      <h3><b>Reviews</b></h3>
      <div class="card mb-3">
        <div class="card-body">
          <div class="row">
            <div class="col-md-1">
              <img src="https://picsum.photos/80/80?random=1" class="rounded"/>
            </div>
            <div class="col-md-11">
              <div class="ratings">
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <p>`+item.reviews+`</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>`;
}
detailPartner()




