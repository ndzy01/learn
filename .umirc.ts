import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  history: {
    type: 'hash',
  },
  publicPath: './',
  title: 'learn',
  favicon: 'https://ndzy01.gitee.io/docs/favicon.png',
  logo: 'https://ndzy01.gitee.io/docs/favicon.png',
  outputPath: 'docs-dist',
  mode: 'site',
});
