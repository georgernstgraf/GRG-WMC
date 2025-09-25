const button = document.querySelector('button');
const p = document.querySelector('p');
button.addEventListener('click', () => {
    p.classList.toggle('scale');
});
