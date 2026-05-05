
function toggletheme(){
    document.body.classList.toggle("dark")
    let now=document.body.classList.contains("dark")?"dark":"light";
}
function putcookie(name,value,days){
    let limit=days*24*60*60;
    document.cookie=`${name}=${encodeURIComponent(value)};path=/;max-age=${limit}`;

}
function postcookie(name){
    let  cookies=document.cookie.split('; ');
    for(let cookie of cookies){
        let [key,val]=cookie.split('=');
        if (key===name)return decodeURIComponent(val);
    }
    return null;
}

let form =document.getElementById('form')
let email=document.getElementById('email')
let error2=document.getElementById('error2');
let date = document.getElementById('date') ;
let error3 =document.getElementById('error3');
let namer =document.getElementById('name');
let error4=document.getElementById('error4');
let select =document.getElementById('select');
let error5=document.getElementById('error5');
let number = document.getElementById('num') ;
let error =document.getElementById('error');
number.addEventListener('input',function(){
    error.innerText=" ";
})
email.addEventListener('input',function(){
    error2.innerText=" ";
})
date.addEventListener('input',function(){
    error3.innerText=" ";
})
namer.addEventListener('input',function(){
    error4.innerText=" ";
})
select.addEventListener('change',function(){
    error5.innerText=" ";

})
form.addEventListener('submit',function(e)
{
    let validation=true;

let numbervalue= number.value;
function validnumber(numbervalue){
    let correct= /^01[0-9]{9}$/;
    return correct.test(numbervalue);}

if(!validnumber(numbervalue)){
    e.preventDefault()
    error.innerText="ادخل الرقم الصحيح";
validation=false;}
else{
    error.innerText=" ";
}




let namevalue =namer.value;
if(namevalue==""){
    e.preventDefault()
    error4.innerText=" ادخل اسم المستخدم";
    validation=false;
}
else{
    error4.innerText=" ";
}
let selectvalue= select.value;
if (selectvalue==""){
e.preventDefault()
error5.innerText="ادخل المتحف";
validation=false;
}
else{
   error5.innerText=" ";
}




    let emailvalue= email.value;
function validemail(emailvalue){
    let correct2= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return correct2.test(emailvalue);}
    if(!validemail(emailvalue)){
    e.preventDefault()
    error2.innerText="ادخل الايميل الصحيح" ;
validation=false;}
else{
    error2.innerText=" ";
}


    let datevalue= date.value;
    function validdate(datevalue){
    let dateselected= new Date(datevalue)
    let datenow= new Date()
    datenow.setHours(0,0,0,0)
    return dateselected>=datenow;
}
if(! validdate(datevalue)){
     e.preventDefault()
    error3.innerText="ادخل التاريخ الصحيح"
    validation=false;
}else{
    error3.innerText=" "
}
if(validation){
    let data ={
        name:namer.value,
        select:select.value,
        num:number.value,
        email:email.value,
        date :date.value

    };
     putcookie('userprofile',JSON.stringify(data),7)
    alert('تم الحفظ بنجاح');}
})
window.addEventListener('DOMContentLoaded',function(){
    let saveddata=postcookie('userprofile');
    if(saveddata){
        try{
            let data =JSON.parse(saveddata);
            number.value=data.num || '';
            email.value =data.email || '';
            date.value=data.date || '';
            namer.value=data.name || '';
            select.value=data.select || '';
        }
        catch(e){}
    }
})







function changeTheme(){
    let body = document.body;

    if(body.classList.contains("dark")){
        body.classList.remove("dark");
        body.classList.add("light");
        localStorage.setItem("theme","light");
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
        localStorage.setItem("theme","dark");
    }

    updateThemeButton();
}

function updateThemeButton(){
    const themeBtn = document.getElementById("themeBtn");
    if(!themeBtn) return;
    const isDark = document.body.classList.contains("dark");
    themeBtn.innerText = isDark ? "☀" : "☾";
}

window.onload = function(){
    let savedTheme = localStorage.getItem("theme") || "dark";
    document.body.classList.add(savedTheme);

    
    updateThemeButton();
};

    







   

