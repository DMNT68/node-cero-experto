import { yarg } from './config/plugins/args.plugin';
import { ServerApp } from './presentation/server';

(async () => {
    await main();
})();

async function main() {
    const { b: base, l: limit, s: showTable, n: name, d: destination } = yarg;
    ServerApp.run({ base, limit, showTable, fileDestination: destination, fileName: name });
}
