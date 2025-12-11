// اسکریپت برای ظاهر شدن المان‌ها هنگام اسکرول
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.card');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].style.opacity = '1';
            reveals[i].style.transform = 'translateY(0)';
        }
    }
}