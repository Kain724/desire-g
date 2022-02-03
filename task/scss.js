const {
    src,
    dest,

} = require('gulp')

//Конфигурация
const path = require('../config/path.js')



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


    // <div div class="wrapper" >
    //   <header class="header">
    //     <div class="container">
    //       <div class="header__inner">
    //         <nav class="menu">
    //           <ul class="menu__list">
    //             <li class="menu__list-item">
    //               <a class="menu__list-link" href="#">About</a>
    //             </li>
    //             <li class="menu__list-item">
    //               <a class="menu__list-link" href="#">Gallery</a>
    //             </li>
    //           </ul>
    //         </nav>
    //         <a class="logo" href="#">
    //           <img src="/img/logo.png" alt="logo" />
    //         </a>
    //         <nav class="menu">
    //           <ul class="menu__list">
    //             <li class="menu__list-item">
    //               <a class="menu__list-link" href="#">Blog</a>
    //             </li>
    //             <li class="menu__list-item">
    //               <a class="menu__list-link" href="#">Contact</a>
    //             </li>
    //           </ul>
    //         </nav>
    //         <button class="header__btn">
    //           <img src="img/icon_menu.svg" alt="icon menu" />
    //         </button>
    //         <div class="rightside-menu rightside-menu--close">
    //           <button class="rightside-menu__close">
    //             <img class="rightside-menu__cross" src="img/close.svg" alt="cross" />
    //           </button>
    //           <div class="rightside-menu__content">
    //             <a class="rightside-menu__logo" href="#">
    //               <img src="img/logo-big.png" alt="logo" />
    //             </a>

    //             <h4 class="rightside-menu__title">Furniture for life</h4>
    //             <p class="rightside-menu__text">
    //               Sustainable hot chicken skateboard, dreamcatcher meggings actually
    //               squid. Slow-carb everyday carry +1 art party microdosing, put a bird on
    //               it brooklyn
    //             </p>
    //             <img
    //               class="rightside-menu__images"
    //               src="img/rightside-img.jpg"
    //               alt="images"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </header>
    //   <main class="main"></main>
    //   <footer class="footer">
    //     <div class="footer__content">
    //       <div class="container">
    //         <div class="footer__inner">
    //           <div class="footer__info">
    //             <h6 class="footer__info-title">Contact Us</h6>
    //             <p class="footer__info-text">
    //               Keffiyeh poutine etsy, paleo cray put a bird on it microdosing schlitz
    //               you probably occupy
    //             </p>
    //             <a class="footer__info-email" href="mailto:ouremailaddress@email.com"
    //               >ouremailaddress@email.com
    //             </a>
    //             <form class="footer__form" action="">
    //               <input
    //                 class="footer__form-input"
    //                 type="text"
    //                 type="email"
    //                 placeholder="Subscribe by email"
    //               />
    //               <button class="footer__form-button" type="submit">Send</button>
    //             </form>
    //           </div>
    //           <ul class="footer__social">
    //             <li class="footer__social-item">
    //               <a class="footer__social-link footer__social-link--facebook" href="#"
    //                 >Facebook</a
    //               >
    //             </li>
    //             <li class="footer__social-item">
    //               <a class="footer__social-link footer__social-link--instagram" href="#"
    //                 >Instagram</a
    //               >
    //             </li>
    //             <li class="footer__social-item">
    //               <a class="footer__social-link footer__social-link--pinterest" href="#"
    //                 >Pinterest</a
    //               >
    //             </li>
    //             <li class="footer__social-item">
    //               <a class="footer__social-link footer__social-link--whatsapp" href="#"
    //                 >WhatsApp</a
    //               >
    //             </li>
    //             <li class="footer__social-item">
    //               <a class="footer__social-link footer__social-link--youtube" href="#"
    //                 >Youtube</a
    //               >
    //             </li>
    //           </ul>
    //           <nav class="footer__menu">
    //             <ul class="footer__menu-list">
    //               <li class="footer__menu-item">
    //                 <a class="footer__menu-link" href="#">Delivery</a>
    //               </li>
    //               <li class="footer__menu-item">
    //                 <a class="footer__menu-link" href="#">FAQ</a>
    //               </li>
    //               <li class="footer__menu-item">
    //                 <a class="footer__menu-link" href="#">Help</a>
    //               </li>
    //               <li class="footer__menu-item">
    //                 <a class="footer__menu-link" href="#">More About Us</a>
    //               </li>
    //             </ul>
    //           </nav>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="footer__copyright">
    //       <div class="container">
    //         <p>674 Gonzales Drive. Washington, PA 15301</p>
    //       </div>
    //     </div>
    //   </footer>
    // </div >