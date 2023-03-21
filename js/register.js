let input = document.querySelectorAll('input')
let btnsArr = Array.from(input);
let ull = document.querySelectorAll('ul')
let btnregister = document.getElementById('btnRegister')
let form = document.querySelector('form')
let isvalid = false
let lds = document.querySelector('.lds-ellipsis')
form.addEventListener('submit',function(e){
e.preventDefault();


})
form.addEventListener('input',function(){
    document.getElementById('msg').innerText = ''
})
function setform(){
   const user={
first_name : input[0].value,
last_name : input[1].value,
email : input[2].value,
password : input[3].value,
age: input[4].value
    }
    senddata(user)
    console.log(user);
}
document.getElementById('btnRegister').addEventListener('click',function(){
    function ooh1(){
        let regex = /^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/
        if(input[0].value.trim() == ''){
            ull[0].innerText = `First Name Is Required`
            setervalid(input[0])
        }
        else if(regex.test(input[0].value)){
            setsucvalid(input[0])
        return true
        }
        else{
            ull[0].innerText = 'Minmum Length 2 and Maxmum 20'
            setervalid(input[0])
            return false
        }
    }
    function ooh3(){
        let regex = /^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/
        if(input[1].value.trim() == ''){
            ull[1].innerText = `Last Name Is Required`
            setervalid(input[1])
        }
        else if(regex.test(input[1].value)){
            setsucvalid(input[1])
        return true
        }
        else{
            ull[1].innerText = 'Minmum Length 2 and Maxmum 20'
            setervalid(input[1])
            return false
        }
    
    }
        
   function ooh2(){
    let regex2 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    
    if(input[2].value.trim() == ''){
        ull[2].innerText = 'Email Is Required'
        setervalid(input[2])
    }
else if(regex2.test(input[2].value)){
    setsucvalid(input[2])
return true
}
else{
    ull[2].innerText = 'InValid Email Formate'
    setervalid(input[2])
    return false
}
   }
    
   function ooh4(){
    let regex3 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/
   
    if(input[3].value.trim() == ''){
        ull[3].innerText = 'Password Is Required'
        setervalid(input[3])
       
    }
else if(regex3.test(input[3].value)){
    setsucvalid(input[3])
return true
}
else{
    ull[3].innerText = 'Minimum five characters, at least one letter and one number'
    setervalid(input[3])
    return false
}
   } 
function ooh5(){
    let regex4 = /^([1-7][0-9]|80)$/
    if(input[4].value.trim() == ''){
        ull[4].innerText = 'Age Is Required'
        setervalid(input[4])
    }
    else if(regex4.test(input[4].value)){
    setsucvalid(input[4])
    return true
    }
    else{
        ull[4].innerText = 'Minimum 10 Maxmum 80'
    setervalid(input[4])
    return false
    }
}
ooh1()
    ooh3()
    ooh2()
    ooh4()
    ooh5()
})
form.addEventListener('submit',function(){
   setTimeout(() => {
    input.forEach(element => {
        if(element.classList.contains('is-invalid')){
            isvalid = false
        }
    else{
        isvalid = true
    }
      });
   }, 1000);

  
  if(isvalid === true){
    setform()
  }
  
})

input[0].addEventListener('input',function(){
    validname(this,ull[0],'First Name Is Required','Minmum Length 2 and Maxmum 20')
}) ;
 input[1].addEventListener('input',function(e){
    validname(input[1],ull[1],'Last Name Is Required','Minmum Length 2 and Maxmum 20')
}) ;input[2].addEventListener('input',function(){
    validemail(this,ull[2])
});input[3].addEventListener('input',function(){
    validpass(this,ull[3])
}); input[4].addEventListener('input',function(){
    validage(this,ull[4])
})
async function senddata(user){
    lds.classList.remove("d-none")
 let api = await  fetch('https://sticky-note-fe.vercel.app/signup',{
        method:'Post',
       body:JSON.stringify(user),
       headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
}
    )
    const response = await api.json()
    console.log(response._message);
    if(response._message == undefined ){
        location.href = './index.html'
    }
    else{
        document.getElementById('msg').innerText = response.errors?.email.message
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
function validname(input,ul,message,message2){
    let regex = /^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/
const error = ul

if(input.value.trim() == ''){
    error.innerText = `${message}`
    setervalid(input)
    
}
else if(regex.test(input.value)){

    setsucvalid(input)
return true
}
else{
    error.innerText = `${message2}`
    setervalid(input)
    return false
}
  
   
}
function validemail(input,ul){
    let regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    const error = ul
    if(input.value.trim() == ''){
        error.innerText = 'Email Is Required'
        setervalid(input)
        
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

function validage(input,ul){
   let regex = /^([1-7][0-9]|80)$/
    const error =  ul
    if(input.value.trim() == ''){
        error.innerText = 'Age Is Required'
        setervalid(input)
       
    }
else if(regex.test(input.value)){
    setsucvalid(input)
return true
}
else{
    error.innerText = 'Minimum 10 Maxmum 80'
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