import { defineConfig } from 'dumi';

// dumi的配置 比如logo图标,打包输出，title等
export default defineConfig({
  title: 'zl-min-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  base: '/zl-min-ui/',
  publicPath: '/zl-min-ui/',
  exportStatic: {},
  navs: [
    // null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '组件',
      path: '/components'
    },
    {
      title: 'GitHub',
      path: 'https://github.com/zhengzl-brave/zl-min-ui.git',
    },
  ],
  // more config: https://d.umijs.org/config
});
