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

// btn.addEventListener("click", function(event){
//     console.log(event);
//     console.log("mere ko click kiske kiya !");
// })

//= while working with keyboard event listeners, importent term to focus on inside the defualt agrument "event" are :
/*
1) code :- shows the key code of the key pressed on the screen. Eg: for ';' it 'semicolon'
2) key :- shows which key has been pressed on the screen
3) keycode ;- shows the ASCII code of the key pressed
*/ 

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(event){
//     console.log(event.key);
//     console.log(event.keyCode);
//     console.log(event.code);
//     console.log("key was pressed");
// });

//. A simple game using keyboard event listener
// let gameinp = document.querySelector("input");

// gameinp.addEventListener("keydown", function(event){
//     console.log("code = ",event.code)
//     if(event.code == "ArrowUp" || event.code == "KeyU"){
//         console.log("you charactered moved up");
//     }
//     else if(event.code == "ArrowDown" || event.code == "KeyD"){
//         console.log("you charactered moved down");
//     }
//     else if(event.code == "ArrowLeft" || event.code == "KeyL"){
//         console.log("you charactered moved left");
//     }
//     else if(event.code == "ArrowRight" || event.code == "KeyR"){
//         console.log("you charactered moved right");
//     }
//     else{
//         console.log("you pressed the wrong key");
//     }
// });

//. Form events
//= event.preventDefault ---> prevents default page to get redirected to some other url


// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     alert("Form submitted");
//     form.reset();
// });

//. Extracting form data
//= whenever we want to access a property for manipulation but we are clueless how to access it "like get the value one enters inside the input box" or "getting the code of the key being press" or "any other property we wanna use for any purpose", for all these jugadu work we use console.dir() and find where that thing lies and with what name. ------------- Like here we want ot access the value input in the input box which get stored in      'value' property     of      'event object'    and not in     'innerText'


// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();

//     console.dir(form);
    // let user = document.querySelector("#user");
    // let password = document.querySelector("#password");
    // console.log(user.value);
    // console.log(password.value);

//= their is one more way to access the internal values by access it through our form element----> treating it as an object ----> access element from form.element[i] -----> i depends on the element we want ot access ------> and storing this element in a variable such as user, a, b etc. ------------------------- With its use we don't need to use querySelector().

//     let user = this.elements[0];  //= 0r form.element[0]
//     let pass = this.elements[1];

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`User name is ${user.value} and password is ${password.value}`);
//     form.reset();
// });


// //. more events
// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
// })

// //. input events
// let user = document.querySelector("#user");


// user.addEventListener("input", function(){
//     console.log("input event");
//     console.log("final value = ", this.value);
// });

// //. change events

// let pass = document.querySelector("#password");

// pass.addEventListener("change", function(){
//     console.log("change event");
//     console.log("final change = ", this.value);
// })


//. My Editorial

let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
});

let para = document.querySelector("p");
let input = document.querySelector("input");

input.addEventListener("input", function(){
    para.innerText = this.value;
    console.log("input event");
    console.log("final value = ", this.value);
});