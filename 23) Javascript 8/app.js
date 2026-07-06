//. forEach function 

// let arr = [1,2,3,4,5,6,7,8,9];

// let print = function (el) {
//     console.log(el);
// }
// arr.forEach(print);

// arr.forEach(function (el){
//     console.log(el);
// });
// console.log("");
// arr.forEach(function (el){
//     console.log(el);
// });

// arr.forEach((el)=>{
//     console.log(el);
// });

//=--------------------------------------------------------------------

//. Map and filter

Menu = [
    {
        item: "coldcoffee",
        price: 120
    },
    {
        item : "pizza",
        price: 150
    },
    {
        item : "burger",
        price : 50
    },
    {
        item: "sandwitch",
        price: 70
    },
];

let discounted_price = Menu.map((el)=>{
    return (el.price*0.8);
});

console.log(discounted_price)
let total = 0;
for (let i = 0; i<Menu.length; i++){
    total += discounted_price[i];
};

console.log("Your total bill is : ", total);

let 
