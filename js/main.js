
const pathname = window.location.pathname;

// التحقق إذا كان اسم الصفحة يحتوي على login
if (pathname.includes('index.html')) {
    document.addEventListener('DOMContentLoaded', function () {
        // البحث عن عنصر الناف بار 
        const navbar = document.querySelector('nav');
        // البحث عن الرابط الذي يحتوي على كلمة singin
        const singinLink = navbar.querySelector('a[href*="index.html"]');
        console.log(singinLink)
        if (singinLink) {
            // تغيير النص داخل الرابط
            singinLink.textContent = 'Sing up';

            // تغيير عنوان الرابط
            singinLink.href = singinLink.href.replace('index.html', 'singup.html');
        }
    });

}



