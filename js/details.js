const id = location.search
const getid =  new URLSearchParams(id)
const id2 = getid.get("id");
(async function(id2){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eed130cb2dmsh1acdc11d3de7b30p17ad6bjsnba2663fb9d81',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
  let api =await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
       let api2 = await api.json()
       displaydata(api2)
})()
function displaydata(data){
    
    let detailsBox = `
   
   <div class="col-md-4">
   <figure>
      <img src="${data.thumbnail}" class="w-100" alt="details image" />
      <div class="row mt-3"> <div class="col-3 col-lg-2 me-2 " > 
      <span class="btn btn-dark mb-3 ">FREE</span> </div> 
      <div class="col ">
       <a type="button" name="playnow" class="btn btn-ftg-blue btn-block" href="${data.game_url}" rel="nofollow" target="_blank">
      <strong>PLAY NOW </strong>
      <i class="fas fa-sign-out-alt"></i>
      </a> 
      </div> 
      </div>
   </figure>
</div>
<div class="col-md-8">

   <div>
      <nav aria-label="breadcrumb">
         <ol class="breadcrumb">
            <li class="breadcrumb-item text-reset"><a href="./home.html">Home</a></li>
            <li class="breadcrumb-item text-info" aria-current="page">${data.title}</li>
         </ol>
      </nav>

      <h1>${data.title}</h1>

      <h3>About ${data.title}</h3>
      <p>${data.description}</p>
      <h2 class="h3 font-weight-dark  text-lg-left mt-5 mb-0 pb-3">${data.title} Online Screenshots</h2>
      <div class="row text-center text-lg-left"> 
      <div class="col-lg-3 col-md-4 col-6"> 
      <img class="thumb-gallery shadow-sm rounded w-100" src="${data.screenshots[0].image}" alt="Drakensang Online Thumbnail 1"> 
      </div>
       <div class="col-lg-3 col-md-4 col-6"> <img class="thumb-gallery shadow-sm rounded w-100" src="${data.screenshots[1].image}" alt="Drakensang Online Thumbnail 2"> 
        </div>
        <div class="col-lg-3 col-md-4 col-6">  <img class="thumb-gallery shadow-sm rounded w-100" src="${data.screenshots[2].image}" alt="Drakensang Online Thumbnail 3">  
        </div>
          </div>
          <h2 class="mt-5 h3">Additional Information</h2>
          <div class="row mb-3"> 
          <div class="col-6 col-md-4"> 
          <span class="text-light">Title<br></span> 
          <p class="text-info">${data.title}</p> </div>
           <div class="col-6 col-md-4">
            <span class="text-light">Developer<br></span> 
            <p class="text-info"> ${data.developer}</p> </div>
             <div class="col-6 col-md-4"> 
             <span class="text-light">Publisher<br></span> 
             <p class="text-info"> ${data.publisher}</p> </div>
              <div class="col-6 col-md-4">
               <span class="text-light">Release Date<br></span> 
               <p class="text-info"> ${data.release_date}</p> </div> <div class="col-6 col-md-4">
                <span class="text-light">Genre<br></span> <p class="text-info"> ${data.genre}</p> </div>
                 <div class="col-6 col-md-4"> <span class="text-light">Platform<br></span>
                 <p class="text-info">  <i class="fas fa-window-maximize"></i> ${data.platform} </p>
                  </div> 
          </div>
   </div>
</div>

   `;

   document.getElementById("detailsData").innerHTML = detailsBox;
   document.body.style.cssText = `
   background:url('${data.thumbnail.replace("thumbnail", "background")}');
   background-size: cover; 
   background-position: center;
   `
}
