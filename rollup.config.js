import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

export default {
    input: "./index.js",
    output: {
        file: './dist/FToolbox.umd.js',
        name: 'FToolbox',
        format: 'umd'
    },
    plugins: [
        babel({
            exclude: 'node_modules',
        }),
        commonjs()
    ]
}