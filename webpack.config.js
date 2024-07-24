const path = require('path')

module.exports ={
    entry: './src/index.js', // Punto de entrada de tu aplicacion
    output: {
        filename: 'bundle.js', //Nombre de salida
        Path: path.resolve(__dirname, 'dist'), //Carpeta de salida
    },
    module: {
        rules: [
        {
            test: /\.css$/, // Regex para identificar archivos CSS
            use: ['style-loader', 'css-loader'], // Loader para procesar archivos
        },
        {
            test: /\.js$/, //Regex para identificar archivos JS
            exclude: /node_modules/, //Excluir la carpeta node_modules
            use: {
                Loader: 'babel-loader', // Loader para convertir JS moderno al JS compatible a mas navegadores
                presets: ['@babel/preset-env'], 
            },
        },
        ],
    },
devtool: 'source-map', //Genera source maps para facilitar la depuracion
devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // Carpeta del que correra el 
    compress: true, // Habilitar comprension gzip
    port: 9000, // Puerto del servidor de desarrollo
    },
}