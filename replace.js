//let msg = "I love java";
//console.log(msg.replace("java","javascript"));

//let a = "abc123xyz45";
//console.log(a.replace(/[0-9]/g, ""));


//let a ="   java    is      awesome   ";
//console.log(a.trim().replace(/\s+/g, " "));


//let a = "aabbcccc";
//console.log(a.replace(/(.)\1+/g, "$1"));


//let a ="abbb";
//console.log(a.replace(/(.)\1+/g,  "$1"));

let a ="abc111def222ghi";
console.log(a.replace(/(\d)\1+/g,  "$1"));
