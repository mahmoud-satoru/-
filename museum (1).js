
//عمل مصفوفة بالمعلومات وتخزينها في ثابت

const museumsData=[

    {
        id:"gem",
   name:"المتحف المصري الكبير",
   img:"gem.jpg",
   info:"المتحف المصري الكبير في الجيزة هو أكبر متحف للآثار المصرية في العالم، ويضم أكثر من 100 ألف قطعة أثرية. من أبرز معروضاته المجموعة الكاملة لكنوز الملك توت عنخ آمون، ومراكب الملك خوفو، ومقتنيات الملكة حتب حرس. يتميز بموقعه الفريد بجوار الأهرامات وتصميمه العصري، ويضم أيضًا مركزًا عالميًا لترميم الآثار ومتحفًا للأطفال، ليكون وجهة ثقافية وسياحية لا مثيل لها."

    


},
{
    id:"imo",
    name:"متحف ايمحتب بسقارة",
    img:"imo.jpg",
    info:"متحف إيمحتب في سقارة هو متحف أثري حديث نسبيًا افتتح عام 2006، وأعيد افتتاحه في ديسمبر 2023 بعد تطوير شامل، ويخلّد ذكرى المهندس والطبيب المصري القديم إيمحتب، مصمم هرم زوسر المدرج وأول من استخدم الحجر في البناء. يضم المتحف نحو 286 قطعة أثرية موزعة في ست قاعات، من أبرزها أقدم مومياء ملكية للملك مري إن رع، وأدوات جراحة تعود للأسرة الخامسة، إضافة إلى مومياوات حيوانية نادرة مثل شبل الأسد والقطط. "
},
{
        id:"nmec",
   name:"المتحف القومي للحضارة المصرية",
   img:"nmec.jpg",
   info:"المتحف القومي للحضارة المصرية في الفسطاط بالقاهرة هو أول متحف يعرض تطور الحضارة المصرية عبر العصور، ويضم أكثر من 50 ألف قطعة أثرية. من أبرز معروضاته قاعة المومياوات الملكية التي استقبلت 22 مومياء في موكب تاريخي عام 2021، إضافة إلى معارض عن النيل والكتابة والنسيج المصري. بموقعه المطل على بحيرة عين الصيرة، يعد وجهة ثقافية وسياحية مميزة للتعرف على تاريخ مصر من فجر التاريخ حتى العصر الحديث."

    


},
{
        id:"emc",
   name:"المتحف المصري بالتحرير",
   img:"emc.jpg",
   info:"المتحف المصري بالتحرير في قلب القاهرة هو أقدم وأشهر متحف للآثار المصرية، افتتح عام 1902 ويضم أكثر من 120 ألف قطعة أثرية. من أبرز معروضاته القناع الذهبي للملك توت عنخ آمون، ومجموعة المومياوات الملكية، وآثار من عصور ما قبل التاريخ حتى العصرين اليوناني والروماني. بموقعه المميز في ميدان التحرير، يعد وجهة أساسية للتعرف على تاريخ مصر وحضارتها العريقة."

    


},
{
        id:"lxm",
   name:"متحف الاقصر",
   img:"lxm.jpg",
   info:"متحف الأقصر في مدينة الأقصر يُعد من أهم المتاحف الإقليمية في مصر، افتتح عام 1975 ليعرض تاريخ طيبة القديمة. يضم مجموعة مميزة من الآثار تعكس الحياة العسكرية والفنية والدينية في مصر الفرعونية، من أبرزها تماثيل ملوك الدولة الحديثة مثل تحتمس الثالث ورمسيس الثاني، ومقتنيات الملكة حتشبسوت. بموقعه على ضفاف النيل، يقدم تجربة ثقافية فريدة تربط الزائر بتاريخ واحدة من أعظم مدن العالم القديم."

    


},
{
        id:"nub",
   name:"متحف النوبة",
   img:"nub.jpg",
   info:"متحف النوبة في أسوان افتتح عام 1997 ليعرض تاريخ وثقافة النوبة عبر العصور، ويضم أكثر من 5 آلاف قطعة أثرية. من أبرز معروضاته تماثيل وآثار من عصور ما قبل التاريخ والدولة القديمة والحديثة، إضافة إلى مقتنيات مرتبطة بمشروع إنقاذ آثار النوبة أثناء بناء السد العالي. يتميز بتصميمه المستوحى من العمارة النوبية وموقعه المطل على نهر النيل، ليكون نافذة فريدة على حضارة النوبة وتراثها العريق."

    
},
];
//دالة تبديل الوضع 
// ===== THEME =====


function updateThemeButton(){
    const themeBtn = document.getElementById("themeBtn");
    if(!themeBtn) return;
    const isDark = document.body.classList.contains("dark");
    themeBtn.innerText = isDark ? "☀" : "☾";
}


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





function content(){
    //بتأكد من وجود العناصر 
    if(document.getElementById("mainTitle"))document.getElementById("mainTitle").innerText="دليل المتاحف المصرية";
    if(document.getElementById("title2"))document.getElementById("title2").innerText="اكتشف عظمة الحضارة المصرية";
    if(document.getElementById("sideTitle"))document.getElementById("sideTitle").innerText="البحث والتصنيف";

    const container=document.getElementById("cardsContainer");
    if(container){
        //مسح محتوي الحاوية لتجنب التكرار
        container.innerHTML="";
        museumsData.forEach(museum=>{
            //انشاء عنصر جديد لكل متحف وبحط فيه البيانات
                const article=document.createElement("article");
                article.className="card";
                article.innerHTML = `
                    <img src="${museum.img}" alt="${museum.name}">
                    <div class="card-info">
                        <h3>${museum.name}</h3>
                        <p>${museum.info}</p>
                        <button onclick="saveAndgo('${museum.name}')">اذهب</button>
                    </div>`;
                    //اضافة كل كرت جديد
                container.appendChild(article);
        });
    }
}
//دالة البحث
function searchItems(){
    const searchinput=document.getElementById("search");
    if(searchinput) {
        //تحويل النص لحروف صغيرة لو كان بالانجليزي يعنيي
        const searchvalue=searchinput.value.toLowerCase();
        //لو مكتبتش حاجة
        if(searchvalue===""){
            alert("من فضلك اكتب اسم المتحف");
            return;
        }
        //لو كتبت حاجة بيقولي استني ببحث اهووو
        alert("جار البحث عن:"+searchvalue);
        
        const cards=document.querySelectorAll(".card");
        let found=false;
        cards.forEach(card=>{
            if(card.innerText.toLowerCase().includes(searchvalue)){
                //طريقة سكرول الشاشة لما يلاقي الكارت
                card.scrollIntoView({behavior:"smooth", block:"center"});
                card.style.border="3px solid #d4af37";
                setTimeout(()=> card.style.border="none",2000);
                found=true;
            }
        });
        //لو مش موجود اللي كتبته
        if(!found){
            alert("عذرا,لم يتم العثور علي المتحف");
        }
    }
}
//بحفظ اسم المتحف في دالة تعريف ملف الارتباط
function saveAndgo(museumName) {
    window.location.href="tickets.html";

    setcookie("user-choice",museumName);
}
//التحقق من الثيم وتشغيل دالة الكروت
window.onload = function() {
    
    const savedTheme = getCookie("theme");
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else {
        document.body.classList.add("light");
    }

    
    updateThemeButton();

    
    content();
};