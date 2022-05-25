import { defineConfig } from 'vite'
import path from 'path';

import { getBaseViteConfig } from '../../viteBaseConfig'

const pathSrc = path.resolve(__dirname, "src");

const defaultConfig = defineConfig(getBaseViteConfig(__dirname));

const CssConfig = {
  build: {
    lib: {
      entry: `${pathSrc}/index.ts`,
      name: "MyCssLib"
    },
  }, 
  ...defaultConfig
}

export default CssConfig;