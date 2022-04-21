import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import { readdirSync } from 'fs'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import DefineOptions from 'unplugin-vue-define-options/vite'
import viteCompression from 'vite-plugin-compression'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { changePackageVersion } from './build/plugins'
import Markdown from 'vite-plugin-md'
import Prism from 'markdown-it-prism'
import LinkAttributes from 'markdown-it-link-attributes'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import autoImportOptions from './vite-autoimport-options.json'
// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  // 获取.env文件里定义的环境变量
  const env = loadEnv(mode, process.cwd())
  return ({
    base: '/',
    publicDir: 'public',
    define: {
      // 定义全局变量
      'process.env': env
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '#': resolve(__dirname, 'types'),
      }
    },
    plugins: [
      changePackageVersion(),
      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      vueJsx(),
      // 可以在script-setup使用Options API
      DefineOptions(),
      // https://github.com/antfu/unplugin-vue-components 自动导入组件
      Components({
        resolvers: [ElementPlusResolver()],
        dirs: ['src/components', 'src/docs'],
        extensions: ['vue', 'md'],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dts: 'src/components.d.ts',
      }),
      // 自动导入vue和vue-router相关函数
      AutoImport({
        resolvers: [ElementPlusResolver()],
        include: [
          /\.[jt]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue\??/, // .vue
        ],
        imports: [
          'vue',
          'vue-router',
          '@vueuse/head',
          '@vueuse/core',
          'pinia',
          ...autoImportOptions
        ],
        dts: 'src/auto-import.d.ts' // 生成 `auto-import.d.ts` 全局声明
      }),
      Markdown({
        wrapperClasses: 'prose kb_markdown-content',
        headEnabled: true,
        markdownItSetup(md) {
          // https://prismjs.com/
          md.use(Prism)
          md.use(LinkAttributes, {
            matcher: (link: string) => /^https?:\/\//.test(link),
            attrs: {
              target: '_blank',
              rel: 'noopener',
            },
          })
        },
      }),
      // 开启gzip压缩
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz'
      }),
    ],
    server: {
      port: 8888,
      proxy: {
        '/apis': {
          target: env.VITE_APP_BASE_API, // 代理接口
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/apis/, ''),
        },
      },
    },
    build: {
      sourcemap: false,
      minify: 'terser',
      brotliSize: false, // 启用/禁用 brotli 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能
      terserOptions: {
        compress: {
          drop_debugger: mode === 'production',
          drop_console: mode === 'production'
        }
      },
      rollupOptions: {
        input: getPages(),
      },
    },
    css: {
      // 忽略scss字符集，报错: @charset" must be the first rule in the file
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              }
            }
          }
        ]
      }
    }
  })
})
/**
 * 获取多入口文件
 * @returns
 */
function getPages() {
  const pagePath = resolve(__dirname, './src/pages')
  const files: string[] = readdirSync(pagePath)
  const pages: { [key: string]: string } = {
    main: resolve(__dirname, 'index.html'),
  }
  for (let i = 0; i < files.length; i++) {
    const key = files[i].replace('.html', '')
    if (key === 'index') continue
    pages[key] = resolve(__dirname, `src/pages/${files[i]}`)
  }
  return pages
}
