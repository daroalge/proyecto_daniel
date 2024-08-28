document.addEventListener('DOMContentLoaded', function() {
let images = [
    {
        "url" : "https://images.unsplash.com/photo-1588195539297-f0b4efdb5472",
        "nombre" : "image 1",
        "description" : "Ice Cream"
    },

    {
        "url" : "https://images.unsplash.com/photo-1579954115567-dff2eeb6fdeb",
        "nombre" : "image 2",
        "description" : "Ice Cream"
    },

    {
        "url" : "https://images.unsplash.com/photo-1684135347630-82c37ed5c7b8",
        "nombre" : "image 3",
        "description" : "Ice Cream"
    },

    {
        "url" : "https://images.unsplash.com/photo-1593558159516-d0be2a960c52",
        "nombre" : "image 4",
        "description" : "Ice Cream"
    },
];

let actual = 0;

let back = document.getElementById('back');
let forward = document.getElementById('forward');
let image = document.getElementById('bannerImg');
let text = document.getElementById('bannerText');

back.addEventListener('click' , function() {
    actual -= 1;
    if (actual ==-1) {
        actual = images.length -1;
    }
    actualizarCarrusel();
});

forward.addEventListener('click', function() {
    actual += 1;
    if (actual == images.length) {
        actual = 0;
    }
    actualizarCarrusel();
});

function actualizarCarrusel() {
    image.innerHTML = `<img class="section__banner--iceCreamPhoto" src="${images[actual].url}" alt="ice cream" loading="lazy">`;
    text.innerHTML = `
        <h3>${bannerImages[actual].nombre}</h3>
        <p>${bannerImages[actual].descripcion}</p>
    `;
    posicionCarrusel();
    }
});
