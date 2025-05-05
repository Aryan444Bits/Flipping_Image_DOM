let arr = [
    { image: "DOMP1.jpg" },
    { image: "DOMP2.jpg" },
    { image: "DOMP3.jpg" },
    { image: "DOMP4.jpg" },
    { image: "DOMP5.jpg" },
    { image: "DOMP6.jpg" },
    { image: "DOMP7.jpg" },
    { image: "DOMP8.jpg" },
    { image: "DOMP9.jpg" },
    { image: "DOMP10.jpg"}
];

var btn = document.querySelector('button');
var bg = document.querySelector('.bgimg'); 
var img = document.querySelector('img');

function changeImage() {
    let c = Math.floor(Math.random() * arr.length);
    let winner = arr[c];

    img.style.opacity = "0";
    bg.style.opacity = "0";

    setTimeout(() => {
        img.src = winner.image;
        bg.style.backgroundImage = `url('${winner.image}')`;

        img.style.opacity = "1";
        bg.style.opacity = "1";
    }, 500);
}

setInterval(changeImage, 3000);
