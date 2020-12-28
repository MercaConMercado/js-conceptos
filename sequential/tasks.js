//setTimeout( ) // funcion de tiempo para temporizar procesos
const util = require('util') // modulo util para lenguaje
const sleep = util.promisify(setTimeout)

module.exports = {

    async taskOne() {
        try {
          //  throw new Error('tenemos problemas');
            await sleep(4000); // temporizador en milisegundos
            return ' Value 1';
        }
        catch (e) {
            console.log(e);

        }

    },
    async taskTwo() {
        try {
            await sleep(2000);
            return 'Value 2';
        }
        catch (e) {
            console.log(e);
        }


    }
}