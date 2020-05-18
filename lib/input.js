const minimist = require('minimist');

let regEx = /^add$|^a$/ig;
class Input {
  constructor() {
    let argv = minimist(process.argv.slice(2));
    let methode;
    let msg ;
    if(Object.keys(argv).length > 1){
      methode = Object.keys(argv)[1];
      msg = argv[methode];
    }else{
      methode = Object.keys(argv)[0];
      msg = argv[methode];
    }
    if(argv){

      if (regEx.test(methode) && !argv.d) {
        if (typeof (msg) === 'string') {
          this.action = methode;
          this.payload = msg;
        } else {
          console.log('you should type a message');
        }
      } else {
        console.log('you should use (--add) or (--a/-a) to add a message');
    
      }
    }
  }

  valid(){
    let testAdd =  /^add$|^a$/ig;
    if(testAdd.test(this.action) && typeof (this.payload) === 'string'){
      return true;
    }else{
      return false;
    }
  }
}
module.exports = Input;