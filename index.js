#!/usr/bin/env node
const mongoose = require('mongoose');

const Input = require('./lib/input');

const Notes = require('./lib/notes');


let createNoteObject = new Input();


let newNote = new Notes(createNoteObject);
//execute methode

newNote.execute(createNoteObject);


