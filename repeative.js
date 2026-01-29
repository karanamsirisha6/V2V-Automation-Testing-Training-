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