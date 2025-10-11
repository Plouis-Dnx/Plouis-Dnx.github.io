document.addEventListener('DOMContentLoaded', function() {
    const fadeInLeft = document.querySelectorAll('.fadeInLeft');
    fadeInLeft.forEach((element, index) => {
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.opacity = 1;
            element.classList.add('animate__animated', 'animate__fadeInLeft');
        }, 300*index);
    });

    const fadeInRight = document.querySelectorAll('.fadeInRight');
    fadeInRight.forEach((element, index) => {
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.opacity = 1;
            element.classList.add('animate__animated', 'animate__fadeInRight');
        },300*index);
    });
});