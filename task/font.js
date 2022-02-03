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
const newer = require('gulp-newer') // обрабатывает только те файлы, что не были сжаты
const fonter = require('gulp-fonter')
const ttf2woff2 = require('gulp-ttf2woff2')


// обработка FONT
const font = () => {
    return src(path.font.src)
        // .pipe(plumber({
        //     errorHandler: notify.onError(error => ({
        //         title: 'font',
        //         message: error.massage,
        //     }))
        // }))
        .pipe(newer(path.font.dest))
        .pipe(fonter(app.fonter))
        .pipe(dest(path.font.dest))
        .pipe(ttf2woff2())
        .pipe(dest(path.font.dest))

}

module.exports = font