const NoteDb = require('../models/note-schema.js');



class Note {

  create(obg){
    let item = new NoteDb(obg);
    return  item.save();
  }

  get(cat){
    return NoteDb.find(cat);
  }

  update(o){

  }

  delete(id){
    return  NoteDb.findOneAndDelete({ _id: id});
  }

}

module.exports = new Note();