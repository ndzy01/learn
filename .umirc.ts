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
  alias: {
    '@': path.resolve(__dirname, '.', 'src'),
  },
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8001,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  },
});
