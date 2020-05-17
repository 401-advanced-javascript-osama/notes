const minimist = require('minimist');

function Input() {
    let checkMethod = process.argv[2]
    let argv = minimist(process.argv.slice(2));
    let methode = Object.keys(argv)[1];
    let msg = argv[methode];
    let regEx = /^\-{2}add$|^\-{2}a$|^\-a$/ig;
    if (regEx.test(checkMethod)) {
        if (typeof (msg) === 'string') {
            this.action = methode;
            this.payload = msg;
        } else {
            console.log('you should type a message');
        }
    } else {
        console.log('you should use (--add) or (--a/-a) to add a message');

    }
}
module.exports = Input;