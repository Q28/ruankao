/*
 * @Date: 2023-07-18 09:46:19
 * @LastEditors: LSY
 * @LastEditTime: 2023-07-20 22:10:36
 * @Description: Do not edit
 * @FilePath: /project/.umirc.ts
 */
import { defineConfig } from 'dumi';
import navs from './routes/navs';
const repo = 'ruankao';
export default defineConfig({
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  exportStatic: {},
  title: 'project',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  navs,
});
