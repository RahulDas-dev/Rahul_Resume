import { resolve } from 'path';
import { defineConfig } from "vite";
import handlebars from 'vite-plugin-handlebars';

import * as content from "./content.json";


export default defineConfig({
    plugins:[
        handlebars({
            context:content,
            partialDirectory: resolve(__dirname, 'src','partials'),
            compileOptions: {
              preventIndent: true,
            },
            reloadOnPartialChange: true,
          }),
    ],
    server: {
        port: 1420,
        strictPort: true,
    },
    build: {
        target: ["es2015", "chrome100", "safari13"],
        outDir: './build',
        minify: true,
        sourcemap: true,
    },
})