import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar',
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Es el límite de la tabla de multiplicar',
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola',
    })
    .check((argv, options) => {
        if (argv.b < 1) throw 'Error: la base debe ser un número mayor a 0';
        if (argv.l < 1) throw 'Error: el límite debe ser un número mayor a 0';
        return true;
    })
    .parseSync();
