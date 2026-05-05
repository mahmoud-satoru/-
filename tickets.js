// const btn = document.getElementById("themeToggle");

// if (localStorage.getItem("theme") === "dark") {
//     document.body.classList.add("dark");
//     document.body.classList.remove("light");
//     btn.textContent = "☀️";
// } else {
//     document.body.classList.add("light");
// }

// btn.onclick = function () {
//     if (document.body.classList.contains("dark")) {
//         document.body.classList.remove("dark");
//         document.body.classList.add("light");
//         btn.textContent = "🌙";
//         localStorage.setItem("theme", "light");
//     } else {
//         document.body.classList.remove("light");
//         document.body.classList.add("dark");
//         btn.textContent = "☀️";
//         localStorage.setItem("theme", "dark");
//     }
// };



// ===== COOKIE FUNCTIONS =====
function setCookie(name, value, days){
    let expires = "";
    if(days){
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name){
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++){
        let c = ca[i];
        while(c.charAt(0)==' ') c = c.substring(1,c.length);
        if(c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// ===== THEME FUNCTIONS =====
function changeTheme(){
    let body = document.body;

    if(body.classList.contains("dark")){
        body.classList.remove("dark");
        body.classList.add("light");
        setCookie("theme","light",7); // حفظ لمدة 7 أيام
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
        setCookie("theme","dark",7); // حفظ لمدة 7 أيام
    }

    updateThemeButton();
}

function updateThemeButton(){
    const themeBtn = document.getElementById("themeBtn");
    if(!themeBtn) return;
    const isDark = document.body.classList.contains("dark");
    themeBtn.innerText = isDark ? "☀️" : "☾";
}

// ===== LOAD THEME ON PAGE LOAD =====
window.onload = () => {
    const savedTheme = getCookie("theme");
    if(savedTheme){
        document.body.classList.add(savedTheme);
    } else {
        document.body.classList.add("light"); // الثيم الافتراضي
    }
    updateThemeButton();
};