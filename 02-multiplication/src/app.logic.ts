import fs from 'node:fs';
import { yarg } from './config/plugins/args.plugin';

const { b: base, l: limit, s: showTable } = yarg;

const generarTabla = (base: number, limit: number, showTable: boolean = false) => {
    let salida = '';

    salida =
        '====================== \n       Tabla del ' + base + '      \n====================== \n';

    for (let i = 1; i <= limit; i++) {
        salida += `${base} x ${i} = ${base * i} \n`;
    }

    if (showTable) console.log(salida);

    return salida;
};

const outputPath = 'outputs';

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, generarTabla(base, limit, showTable));

console.log('Archivo de Tabla creada');

// console.log(generarTabla(entrada));
