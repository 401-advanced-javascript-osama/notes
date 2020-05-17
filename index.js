#!/usr/bin/env node

const Input = require('./lib/input')

const Notes = require('./lib/notes')
// Input()

let createNoteObject = new Input();
// console.log(myNote);
let newNote = new Notes(createNoteObject);

newNote.execute(createNoteObject);
newNote.add(createNoteObject);



