//
//.   this keyword
//* this keyword refers to the object that is currently using the function
// const students = {
//     name : "priya",
//     age : 42,
//     grade : 12,
//     eng : 86,
//     math : 93,
//     sst : 95,
//     getfunc(){
//         console.log(this.name, this.age, this.grade, this.eng);
//     }   
// }

// function getfunc(){
//     console.log(this);
// }

//=-----------------------------------------------------------------

//. try and catch
//* try allows you to test a block of code that can through an error.
//* catch is used to catch the error thrown by the try block and execute the block of code in place of that.

// console.log("hello");
// console.log("hello");
// try{
//     console.log(a);
// } catch(err) {
//     console.log("error found.... a is not defined ");
//     console.log(err);
// }
// console.log("hello");
// console.log("hello");
// console.log("hello");
//=-----------------------------------------------------------------


//. Arrow function

// //*   multiple arguments
// const area = (a,b) => {
//     console.log(a*b);
// }

// //*single argument
// const cube = (n) =>{
//     console.log(n*n*n);
// }

// //* no argment -----> paranthesis is necessary
// const hello = () =>{
//     console.log("hello world");
// }
//=-----------------------------------------------------------------


//. Arrow function -----> implicit return
// //* when we just have to perform a single operation, their's no need of {} for defining the call back and explicitly mentioning the return keyword. In such cases, the arrow function implicitly returns the result.

// //todo  __-KEYNOTE-__:-  1) if you are not using {} then their's no need to mention return keyword but        2) if you are using {} for defining the callback then u need to mention the return keyword otherwise it will through an error. 

// const sum=(a,b)=>a+b;
//=----------------------------------------------------------------


//. Set timeout and Set interval function

//=----------------------------------------------------------------


//. this with arrow function
//* __ scope of "this" in case of function: __
// It entirely depend upon the calling object. It uses the attributes of the function calling it.

//* __ Scope of "this" in case of an Arrow function: __ 
// Here "this" has lexical scope up here, it looks up to the function, by whom it's parent being called and it inherits the properties from the function calling it's parent.




//!   ____ Exercise questions ____
//todo: 1) Write an arrow function that return the square of a number 'n'.

const mathops = {
    n : Number(prompt("Enter any number")),
    sq : function (){
        square = () =>this.n*this.n;
        console.log(square);

    }
}
//! Study again an REDO it.