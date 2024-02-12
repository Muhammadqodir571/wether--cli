const  logger = ()=>{
    // obeyekt olamiz 
    const resp = {}
    //i index ga qarab argv.length i = 2 desktopdan filega bolgan yol 0 1 ga ten hisob loanadibiz kiritgan data esa 2 lengthga bori taqaladi
    for (let i = 2; i < process.argv.length; i++) {
        //ozgaruvchil olinadi  arg argv[i].split('=)  cuontry = uzbekistan 
       const arg = process.argv[i].split("=")
        console.log(arg);
        //obyektimizga process.argv.length biriktirmoqdamiz i=2 = argv[0]=argv[1] : true
     resp[arg[0]]=arg[1] ? arg[1]:true
    }
    //qaytaramiz objctni
    return resp
}
//fucntion call

console.log(logger()); 