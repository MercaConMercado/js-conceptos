const { taskOne, taskTwo } = require('./tasks.js')


async function principal() {

    try {
        console.time('tiempo');
        const results = await Promise.all([taskOne(), taskTwo()])

        //const value1 = await taskOne();
        //const value2 = await taskTwo();

        console.timeEnd('tiempo');

        console.log('Return Value1:', results[0]);
        console.log('Return Value2:', results[1]);
    }
    catch (e) {
        console.log(e);
    }
}

principal();
