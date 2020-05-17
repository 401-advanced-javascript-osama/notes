function Notes(obg) {
}
Notes.prototype.execute = function (obg) {
    let testAdd =  /^add$|^a$/ig;
    if (testAdd.test(obg.action)) {
        this.add(obg)
    }
}
Notes.prototype.add = function (obg) {
    if (obg.payload) {
        let newNote = {
            id: Math.ceil(Math.random() * 10),
            note: obg.payload
        }
        console.log('Added message :', newNote.note);
    }
}
module.exports = Notes;

