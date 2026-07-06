let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function (){
//     console.log("this button was clicked !!!");
// }

// function sayHello(){
    // console.log("Hello guys, i m a js function");
//     alert("Hello guys, i m a js function");
// }

// btn.onclick = sayHello;
//! Question --> what is the between   "sayHello()"  and   "sayHello"


//. Event listener for elements
// let p = document.querySelector("P");
// p.addEventListener("click", function(){
//     console.log("Paragraph was clicked !!!");
// });

// let d = document.querySelector(".box");
// d.addEventListener("mouseenter", function(){
//     console.log("Cursor entered inside the box");   
// });

//. this in event listner
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     console.log("Kisne mere ko click kiya reeeee......");
// });

// function callevent(){
//     console.log(this.innerText);
//     this.style.backgroundColor="green";
// }

// p.addEventListener("click", callevent);
// h1.addEventListener("click", callevent);
// h3.addEventListener("click", callevent);
// btn.addEventListener("click", callevent);


//. keyboard events 
//= It has a default argument known as "event" -----> eg;-  .......function(event)...;

btn.addEventListener("click", function(event){
    console.log(event);
    console.log("mere ko click kiske kiya !");
})

//= while working with keyboard event listeners, importent term to focus on inside the defualt agrument "event" are :
/*
1) code :- shows the key code of the key pressed on the screen. Eg: for ';' it 'semicolon'
2) key :- shows which key has been pressed on the screen
3) keycode ;- shows the ASCII code of the key pressed
*/ 

let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){
    console.log(event.key);
    console.log(event.keyCode);
    console.log(event.code);
    console.log("key was pressed");
});
