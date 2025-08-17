let btn = document.querySelector("button");
let bars = document.querySelectorAll("div");
let para = document.querySelectorAll("p");



btn.addEventListener("click", ()=>{
    bars.forEach(bar=>{
        const color = getRandomColor();
        bar.style.backgroundColor = color;
        para.textcontent = color;
    });
    console.log("all colors updated");
})

function getRandomColor(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color  = `rgb(${red}, ${green}, ${blue})`;
    return color;
}