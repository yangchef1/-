const images = [
    "img0.jpg",
    "img1.jpg",
    "img2.jpg",
    "img3.jpg"
    
];
const BACKGROUND = "background";

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(img/${chosenImage})`;

 
