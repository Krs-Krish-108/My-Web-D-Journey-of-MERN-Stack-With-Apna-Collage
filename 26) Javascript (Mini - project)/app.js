let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");


//. Event Bubbling
//= If nested elements have event listeners, a click on a child element also triggers listeners on its parent elements (event bubbling).
div.addEventListener("click", function(event){
    console.log("div was clicked");
});

ul.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("ul was clicked");
});

for(li of lis){
    li.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("li was clicked");
    });
}
