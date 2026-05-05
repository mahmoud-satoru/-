// دالة لجلب وعرض الفيديوهات من ذاكرة المتصفح
function displayFavorites() {
    const grid = document.getElementById('favoritesGrid');
    // جلب البيانات أو مصفوفة فارغة إذا لم يوجد شيء
    const favorites = JSON.parse(localStorage.getItem('myFavorites')) || [];

    // إذا كانت القائمة فارغة
    if (favorites.length === 0) {
        grid.innerHTML = `
            <div class="empty-msg">
                <h2>لا توجد فيديوهات في المفضلة</h2>
                <p>اذهب لصفحة الوسائط وأضف فيديوهاتك المفضلة لتظهر هنا.</p>
                <a href="media_gallery_3.html" class="back-btn">العودة لمعرض الوسائط</a>
            </div>`;
        return;
    }

    // بناء العناصر داخل الـ HTML
    grid.innerHTML = favorites.map(item => `
        <div class="museum-card">
            <div class="video-wrapper">
                <video controls>
                    <source src="${item.videoSrc}" type="video/mp4">
                </video>
            </div>
            <div class="card-content">
                <h3>${item.title}</h3>
                <button class="remove-btn" onclick="removeFromFavorites(${item.id})">إزالة من المفضلة 🗑️</button>
            </div>
        </div>
    `).join('');
}

// دالة لحذف فيديو معين
function removeFromFavorites(id) {
    let favorites = JSON.parse(localStorage.getItem('myFavorites')) || [];
    // استثناء العنصر الذي يحمل هذا الـ ID
    favorites = favorites.filter(item => item.id !== id);
    // حفظ القائمة الجديدة
    localStorage.setItem('myFavorites', JSON.stringify(favorites));
    // إعادة تحديث الصفحة لعرض النتائج الجديدة
    displayFavorites();
}

// وظيفة الثيم (لتنسيق الألوان)
function changeTheme() {
    document.body.classList.toggle('dark-mode');
    const btn = document.getElementById('themeBtn');
    const isDark = document.body.classList.contains('dark-mode');
    btn.innerHTML = isDark ? '🌙' : '☀️';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// تشغيل الوظائف عند فتح الصفحة
window.onload = () => {
    displayFavorites();
    // تطبيق الوضع الليلي إذا كان مفعلاً
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('themeBtn').innerHTML = '🌙';
    }
};