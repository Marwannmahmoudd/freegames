let links = document.querySelectorAll('.menu a')
let loader = document.querySelector('.loading')
getapi("mmorpg")

links.forEach(function (link) {
    link.addEventListener('click',function(){
        document.querySelector('.menu .active').classList.remove('active')
        link.classList.add('active')
        let namee = link.getAttribute('data-category')
        console.log(namee);
        getapi(namee)
    })
})
async function getapi(datt){
    loader.classList.remove("d-none")
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eed130cb2dmsh1acdc11d3de7b30p17ad6bjsnba2663fb9d81',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
   let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${datt}`, options)
   let api2 = await api.json()
   
   displaydata(api2)
   setTimeout(() => {
    loader.classList.add("d-none")
   }, 100);
}
function displaydata(data){
    let gamesBox = ``;
    for (let i = 0; i < data.length; i++) {
       // let videPath = data[i].thumbnail.slice(0, data[i].thumbnail.lastIndexOf("/")) + "/videoplayback.webm";
       let videoPath = data[i].thumbnail.replace("thumbnail.jpg", "videoplayback.webm")
       gamesBox += `
       <div class="col">
       <div onmouseleave="stopVideo(event)" onmouseenter="startVideo(event)" onclick="gotodetails(${data[i].id})" class="card h-100 bg-transparent" role="button" >
          <div class="card-body">
             <figure class="position-relative">
                <img class="card-img-top object-fit-cover " src="${data[i].thumbnail}" />
               
                 <video muted="true" preload="none" loop  class="w-100 d-none h-100 position-absolute top-0 start-0 z-3">
                          <source src="${videoPath}">
                          </video>
                       </figure>
           
                       <figcaption>
 
                <div class="hstack justify-content-between">
                   <h3 class="h6 small">${data[i].title}</h3>
                   <span class="badge text-bg-primary p-2">Free</span>
                </div>
 
                <p class="card-text small text-center opacity-50">
                   ${data[i].short_description}
                </p>
                </figcaption>
          </div>
 
          <footer class="card-footer small hstack justify-content-between">
 
             <span class="badge badge-color">${data[i].genre}</span>
             <span class="badge badge-color">${data[i].platform}</span>
          </footer>
       </div>
    </div>
       `;
    }
 
    document.getElementById("gameData").innerHTML = gamesBox;
 }
function startVideo(event){
  const videoo = event.target.querySelector("video")
  videoo.classList.remove('d-none')
  videoo.muted = true
  videoo.play()
}
function stopVideo(event){
    const videoo = event.target.querySelector("video")
    videoo.classList.add('d-none')
    videoo.muted = true
    videoo.pause()
}
function gotodetails(id){
   location.href = `./details.html?id=${id}`
}
document.getElementById('logoutt').addEventListener("click",function(){
   localStorage.removeItem('token')
   location.href ="./index.html"
})
let mode = document.getElementById("mode")
if(localStorage.getItem('theme') != null){
   const local = localStorage.getItem('theme')
   if(local === 'light'){
      mode.classList.replace('fa-sun','fa-moon')
   }
   else{
      mode.classList.replace('fa-moon','fa-sun')
   }
   document.querySelector("[data-theme]").setAttribute('data-theme',local)
}
mode.addEventListener("click",function(){
   if(mode.classList.contains("fa-sun")){
      document.querySelector("[data-theme]").setAttribute('data-theme','light')
      mode.classList.replace('fa-sun','fa-moon')
      localStorage.setItem('theme','light')
   }else{
      document.querySelector("[data-theme]").setAttribute('data-theme','dark')
      mode.classList.replace('fa-moon','fa-sun')
      localStorage.setItem('theme','dark')
   }
   

})