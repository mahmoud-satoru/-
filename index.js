//THEME
// ===== THEME =====
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
//DATA
let items = [
    {
    name: "الاهرامات",
     img:"ha.jpg",
    },
    {
    name:"ابو الهول",
    img :"abo.jpg"
    },
    {
   name: "معبد الكرنك",
   img: "k.jpg"
    },
    {
    name:"الاقصر",
    img:"lux.jpg"
    } ,
    {
    name: "وادي الملوك",
    img:"valley.jpg"
    },
    {
    name:"معبد ابوسمبل",
    img:"s.jpg"
    } ,
];

let sliderImages = [
"ha.jpg",
"abo.jpg",
"k.jpg",
"lux.jpg",
"1.jpg",
"2.jpg",
"3.jpg"
];

let currentSlide = 0;


function nextSlide(){

currentSlide++;

if(currentSlide >= sliderImages.length){
currentSlide = 0;
}

document.getElementById("sliderImage").src = sliderImages[currentSlide];

}


function prevSlide(){

currentSlide--;

if(currentSlide < 0){
currentSlide = sliderImages.length - 1;
}

document.getElementById("sliderImage").src = sliderImages[currentSlide];

}
setInterval(nextSlide,4000);

// DISPLAY
function displayCards(arr){ 
    let container = document.getElementById("cardsContainer"); // دا موجود في ال html خزنو في متغير 
    container.innerHTML = "";//مكان  الكروت امسح كل حاجه

    arr.forEach(function(item){// لف علي البينات الي ب اسم item 
        let div = document.createElement("div");// حطهم جوه كرت
        div.className = "card"; //خليته ياخد css card

        div.innerHTML= `
<img src="${item.img}" alt="${item.name}">
<h3>${item.name}</h3>`;
  container.appendChild(div);//تخيل divالكارت والكونتانر صندوق هنا بيقوله حط الكرت جوه الصندوق 
    });
}

// ===== SEARCH =====
function searchItems(){
    let value = document.getElementById("search").value.toLowerCase();// دي عشان لو المستخدم كتب الحروف كبتل او سمول تشتغل

    let result = items.filter(function(item){//item الصور الي فوق زي الاهرامات و ابو الهول
        return item.name.toLowerCase().includes(value);
    });

    displayCards(result);
}



function getCookie(name){
let cookies = document.cookie.split(";");

for(let c of cookies){
let [key,value] = c.trim().split("=");

if(key === name){
return value;
}
}

return null;
}

//sound
document.addEventListener("click", function(){
let music = document.getElementById("bgMusic");

music.play();

}, { once: true });
//  ON LOAD
window.onload = function(){
    let savedTheme = getCookie("theme") || "dark";
    document.body.classList.add(savedTheme);

  
setTimeout(function(){

let splash = document.getElementById("logoScreen");

splash.classList.add("hide");

},2000);

    displayCards(items);
};
