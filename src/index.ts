
export class Log {
    static output(msg: string){
        console.log(`%c ${msg}`, 'color: green');
    }

    static error(msg:string){
        console.log(`%c ${msg}`, 'color: red');
    }

    static info(msg: string){
        console.log(`%c ${msg}`, 'color: teal');
    }
}
