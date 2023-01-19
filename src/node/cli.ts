import cac from "cac";
import { resolve } from "path";
import { build } from "./build";
import { createDevServer } from "./dev";


const cli = cac("island").version("0.0.1").help();



// dev
cli.command("dev [root]", "start dev server").action(async (root: string) => {
  console.log("root>>>>>>", root)
  const server = await createDevServer(root);
  await server.listen();
  server.printUrls();
});


// build
cli
  .command("build [root]", "build in production")
  .action(async (root: string) => {
    try {
      console.log("root>>>>>>", root)
      root = resolve(root);
      await build(root);
    } catch (e) {
      console.log(e);
    }
  });



cli.parse();

// 调试 CLI:
// 1. 在 package.json 中声明 bin 字段
// 2. 通过 npm link 将命令 link 到全局
// 3. 执行 island dev 命令
