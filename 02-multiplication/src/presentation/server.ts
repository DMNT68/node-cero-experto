import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use.case';

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    fileDestination: string;
    fileName: string;
}

export class ServerApp {
    constructor() {}

    static run({ base, limit, showTable, fileDestination, fileName }: RunOptions) {
        console.log('Server running...');
        const table = new CreateTable().excute({ base, limit });
        const fileCreated = new SaveFile().execute({
            fileContent: table,
            fileName,
            fileDestination,
        });
        if (showTable) console.log(table);
        fileCreated ? console.log('Archivo creado') : console.log('Error al crear el archivo');
    }
}
