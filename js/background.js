'use strict';

const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];


const choseImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `image/${choseImage}`;

document.body.appendChild(bgImage);
bgImage.classList.add("bg");