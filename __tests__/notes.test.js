'use strict';
const Input = require('../lib/input.js');

const Notes = require('../lib/notes.js');

const minimist = require('minimist');

jest.mock('minimist');

minimist.mockImplementation(() => {
  return {
    add: 'helloooo',
  };
});


jest.spyOn(global.console, 'log');

describe('Note Module', () => {
  it('Nothing is logged to the console if there was no command given', () => {
    let newNote = new Notes();
    newNote.execute();
    expect(console.log).not.toHaveBeenCalled();
  });
  it('logs notes when execute() with an object with note, If the command (add) and data (the note) were both valid', () => {
    let createNoteObject = new Input();
    let newNote = new Notes(createNoteObject);
    newNote.execute(createNoteObject);
    expect(console.log).toHaveBeenCalled();
  });
  
  
});