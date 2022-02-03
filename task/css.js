const {
    src,
    dest,

} = require('gulp')

//Конфигурация
const path = require('../config/path.js')
const app = require('../config/app.js')



//Плагины
const plumber = require('gulp-plumber') // перехватчик ошибок
const notify = require('gulp-notify') // уведомления об ошибках
const concat = require('gulp-concat') // склеивает в один файл
const cssimport = require('gulp-cssimport') // позволяет использовать @import
const autoprefixer = require('gulp-autoprefixer') // для работы с старыми браузерами
const csso = require('gulp-csso') // минификация css
const rename = require('gulp-rename') // для полной не сжатой версии файла
const size = require('gulp-size') // для полной не сжатой версии файла
const gulpGroupCssMediaQueries = require('gulp-group-css-media-queries') // группировка media queries
const webpCss = require('gulp-webp-css')  






// обработка CSS
const css = () => {
    return src(path.css.src, {
            sourcemaps: app.isDev
        })
        // .pipe(plumber({
        //     errorHandler: notify.onError(error => ({
        //         title: 'CSS',
        //         message: error.massage,
        //     }))
        // }))
        .pipe(concat('main.css'))
        .pipe(cssimport())
        .pipe(webpCss())
        .pipe(autoprefixer())
        .pipe(gulpGroupCssMediaQueries())
        .pipe(size({
            title: "main.css"
        }))
        .pipe(dest(path.css.dest, {
            sourcemaps: app.isDev
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(csso())
        .pipe(size({
            title: "main.min.css"
        }))

        .pipe(dest(path.css.dest, {
            sourcemaps: app.isDev
        }))
}

module.exports = css