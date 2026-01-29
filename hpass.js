// function minimumNumber(n, password) {
    
//     let missing =0;
//     if(!/[0-9]/.test(password)) {
//         missing++;
//     }
//     if(!/[a-z]/.test(password)) {
//         missing++;
//     }
//     if(!/[A-Z]/.test(password)){
//         missing++;
//     }
//     if(!/[!@#$%^&*()_+]/.test(password)){
       
//         missing++;
//     }
//     return Math.max(missing, 6-n);
// }


// ///////////////
// if(!/\.(txt|csv)$/.test(filename){
//     console.log("Invalid file extension");
//     return;
// }
// if(/^d/.test(name)){
//     console.log("Filename must not start with digit");
//     return;
// }

// if(!/^[A-Za-z0-9_-]+$/.test(name)){
//     console.log(""Invalid characters in filename);
//     return;
// }
// if(name.length>20){
//     console.log("Filename too long");
//     return;
// }

// console.log("Valid filename");