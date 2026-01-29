// let arr=[2,4,5,6,8];
// let res = []
// for(let i=0;i<arr.length;i++){
//     if(arr.includes(arr[i]*2)){
//         res.push(1)
//     }else{
//         res.push(0)
//     }
// }
// console.log((res).join(" "))


let str ="Please please help me me quickly Quickly";
let res=str.toLowerCase().split(" ");
let sol=[];
for(let i=0;i<res.length;i++){
    if(res[i]===res[i+1]){
        if(sol.includes(res[i])){

        }else{

        sol.push(res[i]);
        }
    }
}
console.log((sol).join(" "))