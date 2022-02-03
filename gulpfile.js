const {
    watch,
    series,
    parallel
} = require('gulp')
const browserSync = require('browser-sync').create()

//Конфигурация 
const path = require('./config/path.js')
const app = require('./config/app.js')



//Задачи
const clear = require('./task/clear.js')
const html = require('./task/html.js')
// const css = require('./task/css.js')
const scss = require('./task/scss.js')
const js = require('./task/js.js')
const img = require('./task/img.js')
const font = require('./task/font.js')


//Сервер
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root,
        }
    })
};


//Наблюдение   (** - на каждом уровне вложенности , *.html - каждого html) 
const watcher = () => {
    watch(path.html.watch, html).on('all', browserSync.reload) //(после .on позволяет отслеживать изменения за пределом)
    // watch(path.css.watch, css).on('all', browserSync.reload)
    watch(path.scss.watch, scss).on('all', browserSync.reload)
    watch(path.js.watch, js).on('all', browserSync.reload)
    watch(path.img.watch, img).on('all', browserSync.reload)
    watch(path.font.watch, font).on('all', browserSync.reload)
}



const build = series(
    clear,
    parallel(html, scss, js, img, font),
);

const dev = series(
    build,
    parallel(watcher, server),
);


//Задачи - делает задачу доступной снаружи
exports.html = html;
// exports.css = css;
exports.scss = scss;
exports.js = js;
exports.watch = watcher;
exports.clear = clear;
exports.server = server;
exports.img = img;
exports.font = font;

//Сборка
exports.default = app.isProd ? build : dev;

