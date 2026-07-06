// our event properties will start with "on" and then the event name
// for example, onclick, onmouseover, onkeydown, etc.

let btns = document.querySelectorAll("button");
// console.dir(btns);



for (btn of btns) {
    
    //     btn.onmouseenter = function() {
        //     console.log("Mouse entered the button");
        //     }
        
        //     btn.onclick= sayhello;   
        // /*                  /\
        //                     ||
        //                     ||
        //                     ||
        //      keep that in mind that, we are not calling the function here, we are just passing the reference of the function to the onclick event handler i.e., 
        //      .                                              we are not using parentheses after the function name 
        
        //      -----> like this "sayhello()" 
        
        //      because if we use parentheses, it will call the function immediately and assign the return value to the onclick event handler, which is not what we want. We want to assign the function itself to the onclick event handler, so that it can be called when the button is clicked.
        // */
        
        //*---------------------------------------------------------
        // //todo    ---- EventListeners ---
        
        // btn.addEventListener("click", sayhello);
    // btn.addEventListener("click", saybye);
    //*---------------------------------------------------------

}

// btn.onclick = function() {
//     alert("a bhaiya, dabai diho kaa !!!");  //? this function is for only single button 
// }

function sayhello(){
    alert("Ki haal hai bauwa !!!");
}

function saybye(){
    alert("Chal bye bauwa !!!");
}

// btn.onclick = sayhello;


//*---------------------------------------------------------
//todo   ---- 'this' in Event Listeners ----

// let btn2 = btns[2];
// let btn3 = btns[3];
// function changecolor(){
//     this.style.backgroundColor = "green";
//     console.dir(this.innerText);
// }

// btn2.addEventListener("click", changecolor);
// btn3.addEventListener("click", changecolor);
// btns[4].addEventListener("click", changecolor);
//*---------------------------------------------------------


//*---------------------------------------------------------
//todo --- Keyboard Events and default 'event' argument ---

// let inp = document.querySelector('input');
// inp.addEventListener("keypress", function(event){
//     // console.log(event);
//     console.log("code =",event.code);
//     console.log("key =",event.key);
//     console.log("key was pressed");
// });

//*------------------------------
//. ----- ACTIVITY -----
// Game controls

//. --------------------


//* -------------------------------------------------------

//=--------------------------------------------------------
//todo --- form events ---
let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    // console.log("you submitted the form");

    // console.dir(form);

    // form.elements[0] = user;
    // form.elements[1]= pass;
    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");

    // console.dir(inp);
    // console.log(user.value);    
    // console.log(pass.value);    
    // alert(`${user.value} your new password ${pass.value} has been updated!!!`)

});
//=--------------------------------------------------------

//=--------------------------------------------------------
//todo --- change and input event ---



//=--------------------------------------------------------