import fs from 'node:fs';
import { SaveFile } from './save-file.use.case';

describe('SaveFileUseCase', () => {
    const customOptions = {
        fileContent: 'custom content',
        fileDestination: 'custom-outputs/file-destination',
        fileName: 'custom-table-name',
    };

    const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

    afterEach(() => {
        const outputsFolderExists = fs.existsSync('outputs');
        if (outputsFolderExists) fs.rmSync('outputs', { recursive: true, force: true });

        const customOutputsFolderExists = fs.existsSync(customOptions.fileDestination);
        if (customOutputsFolderExists)
            fs.rmSync(customOptions.fileDestination, { recursive: true, force: true });
    });

    test('should save file with default values', () => {
        const saveFile = new SaveFile();

        const options = {
            fileContent: 'test content',
        };
        const result = saveFile.execute(options);
        const fileExists = fs.existsSync('outputs/table.txt');
        const fileContent = fs.readFileSync('outputs/table.txt', { encoding: 'utf-8' });

        expect(result).toBe(true);
        expect(fileExists).toBe(true);
        expect(fileContent).toBe('test content');
    });

    test('should save file with custom values', () => {
        const saveFile = new SaveFile();

        const result = saveFile.execute(customOptions);
        const fileExists = fs.existsSync(customFilePath);
        const fileContent = fs.readFileSync(customFilePath, { encoding: 'utf-8' });

        expect(result).toBe(true);
        expect(fileExists).toBe(true);
        expect(fileContent).toBe('custom content');
    });
});
