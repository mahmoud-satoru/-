// --- الجزء الخاص بالثيم (Dark Mode) ---
function changeTheme() {
    const body = document.body;
    const btn = document.getElementById('themeBtn');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        btn.innerHTML = '🌙';
        localStorage.setItem('selected-theme', 'dark');
    } else {
        btn.innerHTML = '☀️';
        localStorage.setItem('selected-theme', 'light');
    }
}

// تطبيق الثيم المحفوظ عند فتح الصفحة
const savedTheme = localStorage.getItem('selected-theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('themeBtn').innerHTML = '🌙';
}

// --- الجزء الخاص بالمفضلة (Favorites) ---
function addToFavorites(id, title, videoSrc) {
    // جلب القائمة الحالية من المتصفح
    let favorites = JSON.parse(localStorage.getItem('myFavorites')) || [];

    // التأكد من عدم تكرار الفيديو
    const isExist = favorites.some(item => item.id === id);

    if (!isExist) {
        // إضافة الفيديو الجديد
        favorites.push({
            id: id,
            title: title,
            videoSrc: videoSrc
        });
        
        // حفظ القائمة المحدثة
        localStorage.setItem('myFavorites', JSON.stringify(favorites));
        
        alert(`تم إضافة "${title}" إلى مفضلتك بنجاح! ❤️`);
    } else {
        alert('هذا الفيديو موجود بالفعل في قائمة المفضلة.');
    }
}