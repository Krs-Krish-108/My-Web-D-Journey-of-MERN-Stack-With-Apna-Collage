let btn = document.querySelector("button");
let heading = document.querySelector("h1");
let box = document.querySelector(".box");

function random_color(){
    let R = Math.floor(Math.random()*256);
    let G = Math.floor(Math.random()*256);
    let B = Math.floor(Math.random()*256);

    let rgb = `rgb(${R},${G},${B})`;
    return rgb
}

btn.addEventListener("click", function(){
    let randomcolor = random_color();
    console.log(randomcolor);
    heading.innerText = randomcolor;
    box.style.backgroundColor = randomcolor;

})