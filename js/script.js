let btnNext = document.querySelector('.btn-next');
let btnPrev = document.querySelector('.btn-prev');
let img = document.querySelectorAll('img');

let i = 0;
btnNext.addEventListener('click', () => {
    img[i].classList.remove('active');
    i++;
    if (i == img.length) {
        i = 0;
    }
    img[i].classList.add('active');
});

btnPrev.addEventListener('click', () => {
    img[i].classList.remove('active');
    --i;
    if (i < 0) {
        i = img.length-1;
    }
    img[i].classList.add('active');
});

function SilderImg() {
    img[i].classList.remove('active');
    i++;
    if (i == img.length) {
        i = 0;
    }
    img[i].classList.add('active');
}
setInterval(SilderImg,1000);