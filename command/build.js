const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')
const path = require('path')
const fsExtra = require('fs-extra')
const fs = require('fs')

// 打包入口文件夹
const entryDir = path.resolve(__dirname, '../packages')
// 出口文件夹
const outDir = path.resolve(__dirname, '../lib')

// vite配置
const baseConfig = defineConfig({
    configFile: false,
    publicDir: false,
    plugins: [vue(), vueJsx()]
})

// vite是基于rollup打包的，所以要建立rollup的配置
const rollupOptions = {
    external: ['vue', 'vue-router'],
    output: {
        globals: {
            vue: 'Vue'
        }
    }
}

// 全量打包构建
const buildAll = async () => {
    await build({
        ...baseConfig,
        build: {
            rollupOptions,
            lib: {
                entry: path.resolve(entryDir, 'index.ts'),
                // 输出的名称
                name: 'dongli-element-components',
                // 输出的文件名
                fileName: 'dongli-element-components',
                // 输出的格式
                formats: ['es', 'umd']
            },
            // 输出路径
            outDir
        }
    })
}
// 单组件打包
const buildSingle = async (name) => {
    await build({
        ...baseConfig,
        build: {
            rollupOptions,
            lib: {
                entry: path.resolve(entryDir, name),
                name: 'index',
                fileName: 'index',
                formats: ['es', 'umd']
            },
            outDir: path.resolve(outDir, name)
        }
    })
}

// 给每一个组件，生成package.json文件
const createPackageJson = (name) => {
    const fileStr = `
        {
            "name": "${ name }",
            "main": "index.umd.js",
            "module": "index.es.js",
            "style": "style.css"
        }
    `
    fsExtra.outputFile(
        path.resolve(outDir, `${ name }/package.json`),
        fileStr,
        'utf-8'
    )
}


// 打包成库
const buildLib = async () => {
    await buildAll()

    // 获取组件名称组成的数组
    const components = fs.readdirSync(entryDir).filter(name => {
        const componentDir = path.resolve(entryDir, name)
        const isDir = fs.lstatSync(componentDir).isDirectory()
        return isDir && fs.readdirSync(componentDir).includes('index.ts')
    })

    for(const name of components) {
        await buildSingle(name)
        createPackageJson(name)
    }
}

buildLib()