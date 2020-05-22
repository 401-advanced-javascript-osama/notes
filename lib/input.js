const minimist = require('minimist');

class Input {
  constructor() {
    //add regex
    let regExAdd = /^add$|^a$/ig;
    let regExCategory = /^category$/ig;
    //list regex
    let regExList = /^list$/ig;
    //delete regex
    let regExDelete = /^delete$/ig;
    let argv = minimist(process.argv.slice(2));
    // console.log(argv);
    
    let methodeAdd1;
    let msgAdd ;
    let methodeCategory;
    let msgCat;
    let methodeListDelete;
    let msgListDelete;
    let argvLenght = Object.keys(argv).length;

    if(Object.keys(argv).length === 3){
      methodeAdd1 = Object.keys(argv)[1];
      methodeCategory = Object.keys(argv)[2];
      msgAdd = argv[methodeAdd1];
      msgCat = argv[methodeCategory];
    }else if(Object.keys(argv).length === 2){
      methodeListDelete = Object.keys(argv)[1];
      msgListDelete = argv[methodeListDelete];
    }
    else if(Object.keys(argv).length === 1){
      methodeAdd1 = Object.keys(argv)[0];
      methodeCategory = Object.keys(argv)[1];
      msgAdd = argv[methodeAdd1];
      this.action = methodeAdd1;
      this.category = methodeCategory;
      this.payload = msgAdd;

    }
    
    //test add command
    let testAddCommand = regExAdd.test(methodeAdd1) && regExCategory.test(methodeCategory) && !(argvLenght > 3) ;
    //test list command
    let testListCommand = regExList.test(methodeListDelete) && !(argvLenght > 2);
    //test delete command
    let testDeleteCommand = regExDelete.test(methodeListDelete) && !(argvLenght > 2);
    ///////////////////////////////////
    if (testAddCommand) {
      if (typeof (msgAdd) === 'string' && typeof (msgCat) === 'string') {
        this.action = methodeAdd1;
        this.payload = msgAdd;
        this.category = msgCat;
      } else {
        console.log('you should type a message with ""');
      }
    }
    else if(testListCommand){
      this.action = methodeListDelete;
      this.payload = msgListDelete;
    }
    else if(testDeleteCommand){
      if (typeof (msgListDelete) === 'string') {
        this.action = methodeListDelete;
        this.payload = msgListDelete;
      } else {
        console.log('you should type an id');
      }
    }
    else {
      console.log(`* you should use (--add with a note and --category for the category) or (--a/-a)
* you should use --list to show all the notes or you can do -- list with a category 
* you should use --delete with an id to delete a note `);
    
    }
    // }
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