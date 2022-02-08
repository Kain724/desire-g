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
const fileInclude = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const size = require('gulp-size')
const webpHtml = require('gulp-webp-html')


// обработка HTML
const html = () => {
    return src(path.html.src)
        // .pipe(plumber({
        //     errorHandler: notify.onError(error => ({
        //         title: 'HTML',
        //         message: error.massage,
        //     }))
        // }))
        .pipe(fileInclude())
        .pipe(webpHtml())
        .pipe(size({
            title: 'Before min-size'
        }))
        .pipe(htmlmin(app.htmlmin))
        .pipe(size({
            title: 'After min-size'
        }))
        .pipe(dest(path.html.dest))
}

module.exports = html