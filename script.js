const thingy = document.querySelector(".content");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay")
let count = 0;

thingy.addEventListener("mouseover", function(e) {
    thingy.style.left = randPosX() + '%';
    thingy.style.top = randPosY() + '%';
    console.log(e);
   // let posX = randPosX();
   // let posY = randPosY();
    count++;
    console.log(count)
    if(count >= 10) {
        modaly();
    }
})

function randPosX() {
    var posX = Math.floor(Math.random()*85 + 7);
    console.log("posX random:" + posX);
    return posX; 
}

function randPosY() {
    var posY = Math.floor(Math.random()*85 + 7)
    console.log("posY random:" + posY);
    return posY;
}

function modaly() {
    modal.classList.add('active');
    overlay.classList.add('active');
}