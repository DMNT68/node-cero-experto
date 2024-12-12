import fs from 'node:fs';

const entrada = 7;

const generarTabla = (entrada: number) => {
    let salida = '';

    salida =
        '====================== \n       Tabla del ' +
        entrada +
        '      \n====================== \n';

    for (let i = 1; i <= 10; i++) {
        salida += `${entrada} x ${i} = ${entrada * i} \n`;
    }

    console.log(salida);
    return salida;
};

const outputPath = 'outputs';

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${entrada}.txt`, generarTabla(entrada));

console.log('Archivo de Tabla creada');

// console.log(generarTabla(entrada));
