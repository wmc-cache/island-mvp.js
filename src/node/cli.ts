import cac from 'cac';
import { resolve } from 'path';
import { build } from './build';
import { resolveConfig } from './config';

const cli = cac('island').version('0.0.1').help();

cli.command('dev [root]', 'start dev server').action(async (root: string) => {
  const createServer = async () => {
    console.log("root", root)
    const { createDevServer } = await import('./dev.js');
    const server = await createDevServer(root, async () => {
      await server.close();
      await createServer();
    });
    await server.listen();
    server.printUrls();
  };
  await createServer();
});

cli
  .command('build [root]', 'build in production')
  .action(async (root: string) => {
    try {
      const config = await resolveConfig(root, 'build', 'production');
      root = resolve(root);
      await build(root, config);
    } catch (e) {
      console.log(e);
    }
  });

cli.parse();