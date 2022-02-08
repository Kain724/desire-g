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
const imagemin = require('gulp-imagemin') // уведомления об ошибках
const newer = require('gulp-newer') // обрабатывает только те файлы, что не были сжаты
const webp = require('gulp-webp') // формат от гугла
const gulpif = require('gulp-if') // формат от гугла










// обработка IMG
const img = () => {
    return src(path.img.src)
        // .pipe(plumber({
        //     errorHandler: notify.onError(error => ({
        //         title: 'img',
        //         message: error.massage,
        //     }))
        // }))
        .pipe(newer(path.img.dest))
        .pipe(webp())
        .pipe(dest(path.img.dest))
        .pipe(src(path.img.src))
        .pipe(newer(path.img.dest))
        .pipe(gulpif(app.isProd,imagemin(app.imagemin)))
        .pipe(dest(path.img.dest))
}

module.exports = img