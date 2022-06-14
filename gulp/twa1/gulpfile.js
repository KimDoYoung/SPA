const { src, dest, task, watch, series, parallel} = require('gulp');
const options = require('./config.js');
const browserSync = require('browser-sync').create();
const del = require('del');

const sass = require('gulp-sass')(require('sass')); //compile sass
const postCss = require('gulp-postcss'); //compile tailwind utilities with tainwind config
const concat = require('gulp-concat'); // concat js,css

const htmlmin = require('gulp-htmlmin'); //html압축
const purgecss = require('gulp-purgecss'); //안쓰는 css삭제
const cleancss = require('gulp-clean-css'); //css 압축
const terser = require('gulp-terser');//js압축
const imagemin = require('gulp-imagemin'); //이미지압축 gulp-imagemin@7.1.0
const copy = require('gulp-copy');
const gulpCopy = require('gulp-copy');
const browserify = require('gulp-browserify'); 

function livePreview(done){
    browserSync.init({
        server :{
            baseDir : options.paths.dist.base,
            // proxy: "yourlocal.dev"
        },
        port : options.config.port || 5000
    });
    done();
}

function previewReload(done){
    console.log("\n", 'Reload....\n');
    browserSync.reload();
    done();
}

//----------------------------------------------------------
// Development Tasks
//----------------------------------------------------------
function cleanDev(){
    console.log(`delete folder ${options.paths.dist.base}`);
    return del([options.paths.dist.base])
}
function devHtml(){
    return src(`${options.paths.src.base}/**/*.html`)
        .pipe(dest(options.paths.dist.base)) ;
}
function devStyles(){
    const tailwindcss = require('tailwindcss');
    return src(`${options.paths.src.css}/**/*.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(postCss([
            tailwindcss(options.config.tailwindjs),
            require('autoprefixer')
        ]))
        .pipe(concat({ path : 'style.css'}))
        .pipe(dest(options.paths.dist.css));

}
// function devScripts(){
//     return src([
//         `${options.paths.src.js}/app/**/*.js`,
//         `${options.paths.src.js}/**/*.js`,
//         `!${options.paths.src.js}/**/external/*`
//     ])
//     .pipe(concat({path:'scripts.js'}))
//     .pipe(dest(options.paths.dist.js))
// }
function devScripts(){
    return src([
        `${options.paths.src.js}/app_config.js`
    ])
    .pipe(browserify({insertGlobals: true}))
    .pipe(concat({path:'scripts.js'}))
    .pipe(dest(options.paths.dist.js))
}
function devImages(){
    return src(`${options.paths.src.image}/**/*`)
        .pipe(dest(options.paths.dist.image));
}
function watchFiles(){
    watch(`${options.paths.src.base}/**/*.html`, series(devHtml, devStyles, previewReload));
    watch([options.config.tailwindjs, `${options.paths.src.css}/**/*.scss`], series(devStyles, previewReload));
    watch(`${options.paths.src.js}/**/*.js`, series(devScripts, previewReload));
    watch(`${options.paths.src.image}/**/*.`, series(devImages, previewReload));
    console.log('Watching for chagneds...');
}

//----------------------------------------------------------
// Product Tasks
//----------------------------------------------------------
function productClean(){
    console.log(`delete folder ${options.paths.build.base}`);
    return del([options.paths.build.base]);
}

function productHtml(){
    return src(`${options.paths.src.base}/**/*.html`)
        .pipe(htmlmin({collapseWhitespace: true, removeComments: true }))
        .pipe(dest(options.paths.build.base));
}

function productStyles(){
    return src(`${options.paths.dist.css}/**/*`)
        .pipe(purgecss({
            content : [ 'src/**/*.{html,js}'],
            defaultExtractor: content => {
                const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
                const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
                return broadMatches.concat(innerMatches)
              }            
        }))
        .pipe(cleancss({compatibility : 'ie8'}))
        .pipe(dest(options.paths.build.css));
}

// function productScripts(){
//     return src([
//         `${options.paths.src.js}/app/**/*.js`,
//         `${options.paths.src.js}/**/*.js`
//     ])
//     .pipe(concat({ path : 'scripts.js'}))
//     .pipe(terser())
//     .pipe(dest(options.paths.build.js));
// }
function productScripts(){
    return src([
        `${options.paths.src.js}/app_config.js`
    ])
    .pipe(browserify({insertGlobals: true}))
    .pipe(concat({ path : 'scripts.js'}))
    .pipe(terser())
    .pipe(dest(options.paths.build.js));
}

function productImages(){
    return src(`${options.paths.src.image}/**/*`)
        .pipe(imagemin())
        .pipe(dest(options.paths.build.image));
}

function buildFinish(done){
    console.log('------------------------------------------------');
    console.log('build finished');
    console.log('------------------------------------------------');
    done();
}
//----------------------------------------------------------
// utilities
//----------------------------------------------------------
function copyExternal(){
    return src(`${options.paths.src.js}/external/*`)
        .pipe(copy(`${options.paths.dist.js}/external`))
        .pipe(copy(`${options.paths.build.js}/external`))
        .pipe(dest('dest/'));
}
//---------------------------------------------------------
exports.default = series(
    cleanDev,
    copyExternal,
    parallel(devStyles, devScripts, devImages, devHtml ),
    livePreview,
    watchFiles
);
    
// exports.product = series (
exports.prod = series(
    productClean,
    parallel(productStyles, productScripts, productImages, productHtml),
    buildFinish
);

//clean dist, build
exports.clean = series(
    parallel( productClean, cleanDev)
);

exports.copy = series(
    copyExternal
)