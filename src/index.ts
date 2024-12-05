export class Log {
    static output(msg: any, value?: any) {
        if (typeof msg === 'object' && !value) {
            // Case 1: msg is an object/array and no value
            console.log(`%c`, 'color: green', msg);
        } else if (typeof value === 'object') {
            // Case 2: message is a string, value is an object/array
            console.log(`%c${msg} ${JSON.stringify(value, null, 2)}`, 'color: green');
        } else if (typeof msg === 'string' && !value) {
            // Case 3: message is a string, no value
            console.log(`%c ${msg}`, 'color: green');
        } else if (typeof msg === 'string' && typeof value === 'string') {
            // Case 4: both msg and value are strings
            console.log(`%c ${msg} ${value}`, 'color: green');
        }
    }

    static error(msg: any, value?: any) {
        if (typeof msg === 'object' && !value) {
            // Case 1: msg is an object/array and no value
            console.log(`%c`, 'color: red', msg);
        } else if (typeof value === 'object') {
            // Case 2: message is a string, value is an object/array
            console.log(`%c${msg} ${JSON.stringify(value, null, 2)}`, 'color: red');
        } else if (typeof msg === 'string' && !value) {
            // Case 3: message is a string, no value
            console.log(`%c ${msg}`, 'color: red');
        } else if (typeof msg === 'string' && typeof value === 'string') {
            // Case 4: both msg and value are strings
            console.log(`%c ${msg} ${value}`, 'color: red');
        }
    }

    static info(msg: any, value?: any) {
        if (typeof msg === 'object' && !value) {
            // Case 1: msg is an object/array and no value
            console.log(`%c`, 'color: teal', msg);
        } else if (typeof value === 'object') {
            // Case 2: message is a string, value is an object/array
            console.log(`%c${msg} ${JSON.stringify(value, null, 2)}`, 'color: teal');
        } else if (typeof msg === 'string' && !value) {
            // Case 3: message is a string, no value
            console.log(`%c ${msg}`, 'color: teal');
        } else if (typeof msg === 'string' && typeof value === 'string') {
            // Case 4: both msg and value are strings
            console.log(`%c ${msg} ${value}`, 'color: teal');
        }
    }
}
