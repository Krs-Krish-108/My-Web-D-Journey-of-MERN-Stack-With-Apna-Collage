let btn = document.querySelectorAll("button");

btn.forEach(element => {
    element.addEventListener("click", ()=>{
        console.log("Button was clicked");
    });    
});