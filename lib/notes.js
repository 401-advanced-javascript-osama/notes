'use strict';
require('dotenv').config();
const mongoose = require('mongoose');

const NoteDb = require('../models/notes-collection.js');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/notes';

mongoose.connect(MONGODB_URI,{
  useNewUrlParser:true,
  useUnifiedTopology : true,
});




class Notes {
  constructor(obg){
  }
  execute (obg) {
    //add regex
    let regExAdd = /^add$|^a$/ig;
    //list regex
    let regExList = /^list$/ig;
    //delete regex
    let regExDelete = /^delete$/ig;
    if(obg){
      if (regExAdd.test(obg.action)) {
        return  this.add(obg);
      }else if(regExList.test(obg.action)){
        return this.list(obg);
      }else if(regExDelete.test(obg.action)){
        return this.delete(obg);
      }
    }
  }
  /////////////////////////////////////////////////////////
  async add(obg) {
    // save to database
    let newNote = {
      text: obg.payload,
      category : obg.category,
    };

    const myNewNote = await NoteDb.create(newNote);
    console.log('Note Saved' , myNewNote.text);
    mongoose.disconnect();

  }
  /////////////////////////////////////////////////////
  async list(obg){
    if ( typeof (obg.payload) === 'string'){
      const categNotes = await NoteDb.get({category: obg.payload});
      categNotes.forEach(val=>{
        console.log(`${val.text}
        category : ${val.category}     id : ${val.id}
-------------------------------------------------------------------`);
      });
 
    }else{
      const allNotes = await NoteDb.get({});
      allNotes.forEach(val=>{
        console.log(`${val.text}
        category : ${val.category}     id : ${val.id}
-------------------------------------------------------------------`);
      });
    }
    mongoose.disconnect();
  }
  /////////////////////////////////////////////////////////////////
  async delete(obg){
    try{
      await NoteDb.delete(obg.payload);
    }catch(err){
      console.log('invalid id');
    }
    mongoose.disconnect();
    
  }
}





module.exports = Notes;

