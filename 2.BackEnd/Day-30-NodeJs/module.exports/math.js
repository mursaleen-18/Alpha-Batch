export const sum = (a,b)=> a+b;
export const mul = (a,b)=> a*b;
export const g = 9.8;
export const pi = 3.14;

// module.exports = 123;

let obj ={
    sum: sum,
    mul: mul,
    g: g,
    pi: pi
};

module.exports = obj;


//another way of doing the above
// module.exports = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     pi: pi
// };