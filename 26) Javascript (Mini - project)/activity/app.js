let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(event){
    let lis = document.createElement("li");
    let btn2 = document.createElement("button");
    let del = btn2;
    del.innerText = "Delete";
    del.classList.add("delete");
    lis.innerText = inp.value;
    lis.appendChild(del);
    ul.appendChild(lis);
    console.log("button was clicked !");
    inp.value = "";
});

//= here we have use the concept of event Delegation, where we use the phenomina of event bubbling for which we use the element's parent element as a trigger.
ul.addEventListener("click", function(event){
    // console.dir(event.target.nodeName);
    if ( event.target.nodeName == "BUTTON"){
        let listitem = event.target.parentElement;
        // console.log(listitem);
        listitem.remove();
        console.log("deleted!");
    }
});


//= wrong logic
// let delbtns = document.querySelectorAll(".delete");
// for (delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//         // console.log("delete button was clicked");
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }