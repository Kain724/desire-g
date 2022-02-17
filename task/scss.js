const {
    src,
    dest,

} = require('gulp')

//Конфигурация
const path = require('../config/path.js')
// const path = require('../config/path.js/index.js')



//Плагины
const plumber = require('gulp-plumber') // перехватчик ошибок
const notify = require('gulp-notify') // уведомления об ошибках
const autoprefixer = require('gulp-autoprefixer') // для работы с старыми браузерами
const csso = require('gulp-csso') // минификация css
const rename = require('gulp-rename') // для полной не сжатой версии файла
const size = require('gulp-size') // для полной не сжатой версии файла
const gulpGroupCssMediaQueries = require('gulp-group-css-media-queries') // группировка media queries
const sass = require('gulp-sass')(require('sass'))
const sassGlob = require('gulp-sass-glob') // маски для sass
const webpCss = require('gulp-webp-css')  
const app = require('../config/app.js')







// обработка SCSS
const scss = () => {
    return src(path.scss.src, {
            sourcemaps: app.isDev
        })
        // .pipe(plumber({
        //     errorHandler: notify.onError(error => ({
        //         title: 'SCSS',
        //         message: error.massage,
        //     }))
        // }))
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(webpCss())
        .pipe(autoprefixer())
        .pipe(gulpGroupCssMediaQueries())
        .pipe(size({
            title: "main.css"
        }))
        .pipe(dest(path.scss.dest, {
            sourcemaps: app.isDev
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(csso())
        .pipe(size({
            title: "main.min.css"
        }))

        .pipe(dest(path.scss.dest, {
            sourcemaps: app.isDev
        }))
}

module.exports = scss


   
