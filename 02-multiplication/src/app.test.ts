import { ServerApp } from './presentation/server';
describe('Test app', () => {
    test('should call Server.run values', async () => {
        const serverRunMock = jest.fn();
        ServerApp.run = serverRunMock;
        process.argv = ['node', 'app.ts', '-b', '10', '-l', '20', '-s' ,'-n', 'test', '-d', 'test'];

        await import('./app');

        expect(serverRunMock).toHaveBeenCalledWith({
            base: 10,
            limit: 20,
            showTable: true,
            fileDestination: 'test',
            fileName: 'test',
        });
    });
});
