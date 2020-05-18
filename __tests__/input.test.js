'use strict';
const minimist = require('minimist');

const Input = require('../lib/input.js');

jest.mock('minimist');

minimist.mockImplementation(() => {
  return {
    add: 'hellooo',

  };
});

describe('Input Module', () => {
  it('If the command (add) and data (the note) were both valid', () => {
    // console.log(minimist());
      
    let createNoteObject = new Input();
    expect(createNoteObject.valid()).toBeTruthy();
  });
  it('If the command (add) and data (the note) were both invalid', () => {
    
    let createNoteObject = new Input();
    createNoteObject.action = 'jhb';
    createNoteObject.payload = 'hscbj';
    expect(createNoteObject.valid()).toBeFalsy();
  });
});

