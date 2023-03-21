import { defineConfig } from "tsup";

export default defineConfig({
    entryPoints: {
        cli: './src/node/cli.ts',
        index: './src/node/index.ts',
        dev: './src/node/dev.ts'
    },
    bundle: true,
    splitting: true,
    minify: process.env.NODE_ENV === 'production',
    outDir: 'dist',
    format: ['cjs', 'esm'],
    dts: true,
    shims: true,
    clean: true
    // banner: {
    //     js: 'import { createRequire as createRequire0 } from "module"; const require = createRequire0(import.meta.url);'
    // } // 使用它可以在生成的 JavaScript 和 CSS 文件的开头插入任意字符串。
});