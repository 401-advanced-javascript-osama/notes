function Notes(obg) {
}

Notes.prototype.execute = function (obg) {
    if (obg.payload) {
        console.log('New note added', obg);
    }
}
Notes.prototype.add = function (obg) {
    // console.log(obg);

    if (obg.payload) {

        let newNote = {
            id: Math.ceil(Math.random() * 10),
            note: obg.payload
        }
        console.log('The message :', newNote.note);
    }
}
module.exports = Notes;

