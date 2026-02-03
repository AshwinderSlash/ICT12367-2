const images = document.querySelectorAll('.img-container img');
const modal = document.querySelector('.modal');
const fullImage = document.querySelector('.full-image');

images.forEach(img => {
    img.addEventListener('click', () => {
        const src = img.getAttribute('src');
        fullImage.src = src;
        modal.classList.add('open'); 
    });
});

modal.addEventListener('click', () => {
    modal.classList.remove('open');
});