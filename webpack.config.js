module.exports = {
    entry: [
        "./src/application.ts"
    ],
    output: {
        filename: "assets/app.js"
    },
    resolve: {
        extensions: [".js", ".ts"]
    },
    module: {
        loaders: [
            {test: /\.tsx?$/, loader: "ts-loader"}
        ]
    }
}
