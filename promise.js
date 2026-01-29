// let d = new Promise((resolve) =>{
//     resolve("Hello Javascript")
// });
// d.then(result => {
//     console.log(result);
// });


//---------------------------------********************
// let marks = 50;
// let d =new Promise((resolve,reject) =>{
//     if(marks >= 40){
//         resolve("Pass");
//     }else{
//         reject("Fail");
//     }

// });

// d.then(result=>{
//     console.log(result);
// })
// .catch(error => {
//     console.log(error);
// })


//o/p: Pass

//------------------*************----------------

// let p= new Promise((resolve)=>{
//     setTimeout(()=>
//     }, 2000);

//  p.then(msg=>{

//  })   

//-----------------------------------------------------------------
let input = "please please give me a a book";
let s=input.split(" ");
let res = [];
for (let i=0;i<s.length-1;i++){
    if(s[i].toLowerCase() === s[i+1].toLowerCase()){
        if(!res.includes(s[i])){
        res.push(s[i]);
        }
    }
}
console.log(res.join(" "));