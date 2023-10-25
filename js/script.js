/* / tres constantes para referenciar as "ITEM" divs Projetos
const form = document.getElementById('form');  
// "const" = Escopo Global - boa pratica é "declar" variavel
const site = document.getElementById('site');
const port = document.getElementById('port');
const movieform = document.querySelector('.movieform');
const moviesite = document.querySelector('.moviesite');
const movieport = document.querySelector('.movieport');


// evento de click
form.addEventListener("click",() => {
    form.classList.toggle('active');
    movieform.classList.toggle('active');
});
site.addEventListener("click",() => {
    site.classList.toggle('active');
    moviesite.classList.toggle('active');
});
port.addEventListener("click",() => {
    port.classList.toggle('active');
    movieport.classList.toggle('active');
});

*/