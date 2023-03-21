let input = document.querySelectorAll('input')
let btnsArr = Array.from(input);
let ull = document.querySelectorAll('ul')
let btnregister = document.getElementById('btnLogin')
let form = document.querySelector('form')
let isvalid = false
let lds = document.querySelector('.lds-ellipsis')
form.addEventListener('submit',function(e){
e.preventDefault();


})
form.addEventListener('input',function(){
    document.getElementById('msg').innerText = ''
})
form.addEventListener('submit',function(){
    setTimeout(() => {
        input.forEach(element => {
            if(element.classList.contains('is-valid')){
                isvalid = true
            }
        else{
            isvalid = false
        }
          });
    }, 1000);
   
    if(isvalid === true){
      setform()
    }
    
  })
function setform(){
   const user={

email : input[0].value,
password : input[1].value,

    }
    senddata(user)
    console.log(user);
}
form.addEventListener('submit',function(){
 function ooh11(){
    let regex2 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    
    if(input[0].value.trim() == ''){
        ull[0].innerText = 'Email Is Required'
        setervalid(input[0])
    }
else if(regex2.test(input[0].value)){
    setsucvalid(input[0])
return true
}
else{
    ull[0].innerText = 'InValid Email Formate'
    setervalid(input[0])
    return false
}
 }
    function ooh22(){
        let regex3 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/
   
        if(input[1].value.trim() == ''){
            ull[1].innerText = 'Password Is Required'
            setervalid(input[1])
           
        }
    else if(regex3.test(input[1].value)){
        setsucvalid(input[1])
    return true
    }
    else{
        ull[1].innerText = 'Minimum five characters, at least one letter and one number'
        setervalid(input[1])
        return false
    }
    
    }
ooh11()
ooh22()

}) ;
input[0].addEventListener('input',function(){
    
    validemail(this,ull[0])
});input[1].addEventListener('input',function(){
    validpass(this,ull[1])
})

async function senddata(user){
    lds.classList.remove("d-none")
 let api = await  fetch('https://sticky-note-fe.vercel.app/signin',{
        method:'Post',
       body:JSON.stringify(user),
       headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
}
    )
    const response = await api.json()
    if(response.message.trim() == "success" ){
        localStorage.setItem('token',response.token)
        location.href = './home.html'
    }
    else{
            
        document.getElementById('msg').innerText = response.message
        
    }
    lds.classList.add("d-none")
    console.log(response);
}
function setervalid(input){
    input.classList.add('is-invalid')
    input.classList.remove('is-valid')
}
function setsucvalid(input) {
    input.classList.add('is-valid')
    input.classList.remove('is-invalid')
}

function validemail(input,ul){
    let regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    const error = ul
    if(input.value.trim() == ''){
        error.innerText = 'Email Is Required'
        setervalid(input)
        return false
    }
else if(regex.test(input.value)){
    setsucvalid(input)
return true
}
else{
    error.innerText = 'InValid Email Formate'
    setervalid(input)
    return false
}

}
function validpass(input,ul){
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/
    const error = ul
    if(input.value.trim() == ''){
        error.innerText = 'Password Is Required'
        setervalid(input)
        return false
    }
else if(regex.test(input.value)){
    setsucvalid(input)
return true
}
else{
    error.innerText = 'Minimum five characters, at least one letter and one number'
    setervalid(input)
    return false
}

}
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
   console.log( document.querySelector("[data-theme]"));
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