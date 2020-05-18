class Notes {
  constructor(obg){

  }
  execute (obg) {
    if(obg){

      let testAdd =  /^add$|^a$/ig;
      if (testAdd.test(obg.action)) {
        this.add(obg);
      }
    }
  }
  add(obg) {
    if(obg){

      if (obg.payload) {
        let newNote = {
          id: Math.ceil(Math.random() * 10),
          note: obg.payload,
        };
        console.log('Added message :', newNote.note);
      }
    }
  }

}


module.exports = Notes;

