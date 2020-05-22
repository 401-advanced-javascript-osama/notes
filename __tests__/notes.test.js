'use strict';
require('@code-fellows/supergoose');

const Note = require('../models/notes-collection.js');

describe('Note Module', () => {
  it('create() => will create a new object and store it in the database', () => {
    let newNote = {
      text: 'Ahmad',
      category : 'student',
    };
    return Note.create(newNote).then(item=>{
      Object.keys(newNote).forEach(key=>{
        expect(newNote[key]).toEqual(item[key]);
      });
    });

  });
  it('get() => will find an object with spacific category', () => {
    let newNote = {
      text: 'Ahmad',
      category : 'student',
    };
    return Note.create(newNote).then(reccord=>{
      return Note.get({category:reccord.category}).then(item=>{
        Object.keys(newNote).forEach((key,idx)=>{
          expect(newNote[key]).toEqual(item[idx][key]);
        });
      });
    });
  });


});
