// let arr2 = [1,2,3,4];
// let arr = [1,2,3,4];
// arr.sayhello = ()=>{
//     console.log("Hello, i m krish !");
// };


// //= Classes, constructors and new operator

// class person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }

// let p1 = new person("krish", 24);
// let p2 = new person("kirti", 21);



//= Inheritence
class person{
    constructor(name, age){
        this.institution = "school";
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`hi, i m ${this.name}`);
    }
}

class teacher extends person{
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
    }
    work(){
        console.log(`I'm ${this.name} and I'm a ${this.subject} teacher. My work is to teach ${this.subject}`);
    }
}

class student extends person{
    constructor(name, age, marks){
        super(name, age);
        this.marks = marks;
    }
    work(){
        console.log(`I'm a ${this.name}. My work is to study and I have scored ${this.marks} in my subject`);
    }
}


let stud1 = new student("krish", 24, 41);
let tech1 = new teacher("Kirti", 21, "Python");