// ===== LANGUAGE =====
let translations = {
    ar: {
        title: "موقع الآثار المصرية",
        title2: "موقع يعرض معلومات عن الآثار",
        hero: "اكتشف حضارة مصر القديمة",
        hero2: "أهلاً بك في عالم الآثار",
        login: "تسجيل",
        search: "ابحث..."
    }
};

let currentLang = "ar";

function setLanguage(lang){
    currentLang = "ar";
    localStorage.setItem("lang", "ar");

    const mainTitle = document.getElementById("mainTitle");
    const title2 = document.getElementById("title2");
    const heroText = document.getElementById("heroText");
    const hero2 = document.getElementById("hero2");
    const loginBtn = document.getElementById("loginBtn");
    const searchInput = document.getElementById("search");

    if(mainTitle) mainTitle.innerText = translations.ar.title;
    if(title2) title2.innerText = translations.ar.title2;
    if(heroText) heroText.innerText = translations.ar.hero;
    if(hero2) hero2.innerHTML = translations.ar.hero2;
    if(loginBtn) loginBtn.innerText = translations.ar.login;
    if(searchInput) searchInput.placeholder = translations.ar.search;

    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
}

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

// ===== DATA =====
let items = [
    { name: "الأهرامات", img:"images/Arte Egipcio.jpg" },
    { name:"أبو الهول", img:"images/Arte Egipcio.jpg" },
    { name: "الكرنك", img: "images/Arte Egipcio.jpg" },
    { name:"الأقصر", img:"images/Arte Egipcio.jpg" },
    { name: "وادي الملوك", img:"images/Arte Egipcio.jpg" },
    { name:"أبو سمبل", img:"images/Arte Egipcio.jpg" }
];

// ===== DISPLAY =====
function displayCards(arr){
    let container = document.getElementById("cardsContainer");
    if(!container) return; // مهم عشان صفحات تانية

    container.innerHTML = "";

    arr.forEach(function(item){
        let div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
        `;

        container.appendChild(div);
    });
}

// ===== SEARCH =====
function searchItems(){
    let searchInput = document.getElementById("search");
    if(!searchInput) return;
    let value = searchInput.value.toLowerCase();

    let result = items.filter(function(item){
        return item.name.toLowerCase().includes(value);
    });

    displayCards(result);
}

// ===== FORM =====
let form = document.getElementById("loginForm");
if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();

        let user = document.getElementById("username").value;
        let pass = document.getElementById("password").value;
        let error = document.getElementById("error");

        if(user.length < 3){
            error.innerText = "اسم المستخدم غير صالح";
            return;
        }

        if(pass.length < 6){
            error.innerText = "كلمة المرور ضعيفة";
            return;
        }

        localStorage.setItem("user", user);
        error.innerText = "تم التسجيل بنجاح";
    });
}

// ===== ON LOAD =====
window.onload = function(){
    let savedTheme = localStorage.getItem("theme") || "dark";
    document.body.classList.add(savedTheme);

    setLanguage("ar");
    displayCards(items);
    updateThemeButton();
};
document.addEventListener("DOMContentLoaded", function () {
    const title2 = document.getElementById("title2");
    const heroText = document.getElementById("heroText");
    const hero2 = document.getElementById("hero2");

    if (title2) {
        title2.innerText = "دليلك للجولات الافتراضية والخرائط التفاعلية";
    }

    if (heroText) {
        heroText.innerText = "جولات 360 وخرائط المتاحف";
    }

    if (hero2) {
        hero2.innerText = "استمتع بتجربة بانورامية للمواقع الأثرية قبل زيارتها.";
    }
});
