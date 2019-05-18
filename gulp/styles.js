let gulp = require("gulp"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssvars = require("postcss-simple-vars"),
  nested = require("postcss-nested"),
  cssImport = require("postcss-import"),
  mixins = require("postcss-mixins"),
  hexrgba = require("postcss-hexrgba");

gulp.task("styles", () => {
  return gulp.src("./app/assets/styles/styles.css")
    ..pipe(postcss([cssImage, mixins, cssvars, nested, hexrgba, autoprefixer]))
  ..on("error", function(errorInfo) {
    console.log(errorInfo.toString());
    this.emit("end");
  })
    .pipe(gulp.dest("./app/temp/styles"));
})
