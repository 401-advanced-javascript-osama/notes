const minimist = require('minimist');

function Input (){
    // console.log(process.argv);
    let checkMethod = process.argv[2]
let argv = minimist(process.argv.slice(2));
// console.log(argv);


let methode = Object.keys(argv)[1];
// console.log(methode);

let msg = argv[methode];
// console.log(msg);

let regEx = /^add$|^a$/ig


if(regEx.test(methode) && (checkMethod === '--add' || checkMethod === '--a'|| checkMethod === '-a')  ){
    if(typeof(msg) === 'string'){
        this.action = methode;
        this.payload = msg;   
    }else{
        console.log('you should type a message');
    }
}else{
   console.log('you should use (--add) or (--a/-a) to add a message');
    
}   
}
module.exports = Input;