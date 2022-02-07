const {
    src,
    dest,

} = require('gulp')

//Конфигурация
const path = require('../config/path.js')
// const path = require('../config/path.js/index.js')
const app = require('../config/app.js')




//Плагины
const plumber = require('gulp-plumber') // перехватчик ошибок
const notify = require('gulp-notify') // уведомления об ошибках
const babel = require('gulp-babel')
// const uglify = require('gulp-uglify') // минимизация js 
const webpack = require('webpack-stream') // минимизация js








// обработка JS
const js = () => {
    return src(path.js.src, {
        sourcemaps: app.isDev
    })
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: 'js',
                message: error.massage,
            }))
        }))
        .pipe(babel())
        .pipe(webpack(app.webpack))
        // .pipe(uglify()) //  при использовании webpack uglify не нужен
        .pipe(dest(path.js.dest, {
            sourcemaps: app.isDev
        }))
}

module.exports = js