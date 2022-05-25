import { defineConfig } from 'vite'
import path from 'path';

import { getBaseViteConfig } from '../../viteBaseConfig'

const defaultConfig = defineConfig(getBaseViteConfig(__dirname));

const CssConfig = {
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MyCssLib"
    },
    ...defaultConfig
  }  
}

export default CssConfig;