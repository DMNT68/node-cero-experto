export interface CreateTableUseCase {
    excute(options: CreateTableOptions): string;
}

interface CreateTableOptions {
    base: number;
    limit: number;
}

export class CreateTable implements CreateTableUseCase {
    constructor() {} // Inyección de dependencias

    excute({ base, limit = 10 }: CreateTableOptions): string {
        let salida = '';
        for (let i = 1; i <= limit; i++) {
            salida += `${base} x ${i} = ${base * i} \n`;
        }

        return salida;
    }
}
