const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.about__text');

readMoreBtn.addEventListener('click',(e)=>{
    text.classList.toggle('show-more');
    if(readMoreBtn.innerText === 'Читати далі') {
        readMoreBtn.innerText = 'Згорнути';
    } else {
        readMoreBtn.innerText = 'Читати далі';
    }
})