// três constantes para referenciar as "ITEM" divs Projetos

const album = document.getElementById('albumFotos');
const casamentos = document.getElementById('casamentos');
const buffet = document.getElementById('buffet');

const movieAlbum = document.querySelector('.movieAlbum');
const movieCasamentos = document.querySelector('.movieCasamentos');
const movieBufett = document.querySelector('.movieBuffet');


// eveto de clik
album.addEventListener('click', () =>{
   album.classList.toggle('active');
   movieAlbum.classList.toggle('active');
});
casamentos.addEventListener('click', () =>{
    casamentos.classList.toggle('active');
    movieCasamentos.classList.toggle('active');
    });
buffet.addEventListener('click' ,() =>{
     buffet.classList.toggle('active');
     movieBufett.classList.toggle('active');
    });
