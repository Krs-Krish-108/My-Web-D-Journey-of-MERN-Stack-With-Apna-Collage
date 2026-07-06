const a = (a, b) => {
    return a + b;
}

const b = (a, b) => {
    return a - b;
}

let c = 10;
let d = 5;

let obj = {
    a: a,
    b: b,
    c: c,
    d: d
}
module.exports = obj;