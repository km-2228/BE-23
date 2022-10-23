const getDataApi = () => {
    const URL = "https://634edef8df22c2af7b452cc0.mockapi.io/partners";
  
    fetch(URL)
      .then((response) => response.json())
      .then((result) => {
      let partner = document.getElementById("detailPartner");
      
      console.log(result)
        
      // let dataPartner = result.results;
      result.forEach((data) => {
          partner.innerHTML +=
            `<div class="row pt-5 pb-4">
                <div class="col-md-3">
                    <img src="https://picsum.photos/200/300?random=1" class="rounded" />
                    <div class="ratings pt-2">
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    </div>
                </div>
                <div class="col-md-9">
                    <h1>`+data.name+`</h1>
                    <p>`+data.deskripsi+`</p>
                    <p>`+data.pengalaman+`</p>
                    <p>`+data.pendidikan+`</p>
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
                      <p>`+data.reviews+`</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
            `;
            // $('.detailBtn').on('click', function(){
            //   console.log($(this).data('usersid'));
            // })
          });
      })
      .catch((error) => console.log(error));
  };
  getDataApi();