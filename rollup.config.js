import pluginAlias from '@rollup/plugin-alias'
import pluginCommonJs from '@rollup/plugin-commonjs'
import pluginJson from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import builtins from 'builtin-modules'
import chalk from 'chalk'
import path, { join } from 'path'
import { external } from './package.json'
import pluginEsbuild from './scripts/plugins/rollup.esbuild.plugin'
import pluginResolve from './scripts/plugins/rollup.assets.plugin'
import pluginPreload from './scripts/plugins/rollup.preload.plugin'
import pluginRenedrer from './scripts/plugins/rollup.renderer.plugin'
import pluginStatic from './scripts/plugins/rollup.static.plugin'
import pluginTypescript from './scripts/plugins/rollup.typescript.plugin'
import pluginWorker from './scripts/plugins/rollup.worker.plugin'
import pluginVueDevtools from './scripts/plugins/rollup.devtool.plugin'

import html, { makeHtmlAttributes } from '@rollup/plugin-html'
import dotenv from 'dotenv'

const extensions = ['.ts', '.mjs', '.js', '.vue', '.json']

// eslint-disable-next-line no-undef -- ignore
const env = dotenv.config({ path: path.join(__dirname, '.env') })

const prod = process.env.NODE_ENV === 'production'

const addVersion = fileName => {
  const ver = prod ? env.parsed.VUE_APP_VERSION_NUMBER : Date.now()
  const { dir, ext, base } = path.parse(fileName)
  if (ext === '.html') {
    return fileName
  }
  const filename = base + `?v=${ver}`
  return dir ? `${dir}/${filename}` : filename
}

const template = ({ attributes, files, meta, publicPath, title }) => {
  const scripts = (files.js || [])
    .map(({ fileName }) => {
      const file = addVersion(fileName)
      const attrs = makeHtmlAttributes(attributes.script)
      return `<script src="${publicPath}${file}"${attrs}></script>`
    })
    .join('\n')

  const links = (files.css || [])
    .map(({ fileName }) => {
      const file = addVersion(fileName)
      const attrs = makeHtmlAttributes(attributes.link)
      return `<link href="${publicPath}${file}" rel="stylesheet"${attrs}>`
    })
    .join('\n')

  const metas = meta
    .map(input => {
      const attrs = makeHtmlAttributes(input)
      return `<meta${attrs}>`
    })
    .join('\n')

  return `
  <!doctype html>
  <html${makeHtmlAttributes(attributes.html)}>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      ${metas}
      <title>${title}</title>
      <link rel="icon" href="favicon.ico">
      ${links}
    </head>
    <body>
      <div id="app"></div>
      ${scripts}
    </body>
  </html>
  `
}

/**
 * @type {import('rollup').RollupOptions[]}
 */
const config = [{
  // this is the rollup config of main process
  input: '../src/renderer/index.ts',
  output: {
    dir: join(__dirname, '../dist'),
    format: 'cjs',
    sourcemap: process.env.NODE_ENV === 'development' ? 'inline' : false
  },
  onwarn: (warning) => {
    if (warning.plugin === 'typescript:checker') {
      console.log(chalk.yellow(warning.message))
    } else {
      console.log(warning.plugin)
      console.log(chalk.yellow(warning.toString()))
    }
  },
  external: [...builtins, 'electron', ...external],
  plugins: [
    pluginAlias({
      entries: {
        '/@main': join(__dirname, '../src/main'),
        '/@shared': join(__dirname, '../src/shared')
      }
    }),
    pluginVueDevtools(),
    pluginStatic(),
    pluginRenedrer(),
    pluginPreload(),
    pluginWorker(),
    pluginTypescript({
      tsconfig: [join(__dirname, '../src/main/tsconfig.json'), join(__dirname, '../src/preload/tsconfig.json')],
      wait: false
    }),
    pluginResolve(),
    pluginEsbuild(),
    nodeResolve({
      browser: false
    }),
    pluginCommonJs({
      extensions: extensions
    }),
    pluginJson({
      preferConst: true,
      indent: '  ',
      compact: false,
      namedExports: true
    }),
    html({
      publicPath: env.parsed.BASE_URL,
      title: 'ERX',
      template,
    }),
  ]
}]

export default config
