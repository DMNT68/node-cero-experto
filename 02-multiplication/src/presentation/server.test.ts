import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use.case';
import { ServerApp } from './server';

describe('Server', () => {
    const options = {
        base: 2,
        limit: 10,
        showTable: false,
        fileDestination: './test-destination',
        fileName: 'test-filename',
    };

   /*  test('should create server instance', () => {
        const server = new ServerApp();
        expect(server).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe('function');
    });

    test('should run ServerApp with options', () => {
        const logSpy = jest.spyOn(console, 'log');
        const createdTableSpy = jest.spyOn(CreateTable.prototype, 'excute');
        const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');

        ServerApp.run(options);

        expect(logSpy).toHaveBeenCalledTimes(2);
        expect(logSpy).toHaveBeenCalledWith('Server running...');
        expect(logSpy).toHaveBeenCalledWith('Archivo creado');

        expect(createdTableSpy).toHaveBeenCalledTimes(1);
        expect(createdTableSpy).toHaveBeenCalledWith({ base: options.base, limit: options.limit });

        expect(saveFileSpy).toHaveBeenCalledTimes(1);
        expect(saveFileSpy).toHaveBeenCalledWith({
            fileContent: expect.any(String),
            fileName: options.fileName,
            fileDestination: options.fileDestination,
        });
    }); */

    test('should run with custom options', () => {
        const logMock = jest.fn();
        const logErrorMock = jest.fn();
        const createTableMock = jest.fn().mockReturnValue('1 x 2 = 2');
        const saveFileMock = jest.fn().mockReturnValue(true);
        
        console.log = logMock;
        console.error = logErrorMock;
        CreateTable.prototype.excute = createTableMock;
        SaveFile.prototype.execute = saveFileMock;

        ServerApp.run(options);

        expect(logMock).toHaveBeenCalledWith('Server running...');
        expect(createTableMock).toHaveBeenCalledWith({ base: options.base, limit: options.limit });
        expect(saveFileMock).toHaveBeenCalledWith({
            fileContent: '1 x 2 = 2',
            fileName: options.fileName,
            fileDestination: options.fileDestination,
        });
        expect(logMock).toHaveBeenCalledWith('Archivo creado');
        // expect(logMock).not.toHaveBeenCalledWith();
    })
});
