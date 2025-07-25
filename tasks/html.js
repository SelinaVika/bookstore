const {
	src,
	dest
} = require('gulp');
const include = require('gulp-file-include');
const bs = require('browser-sync');
const htmlTagInclude = require('gulp-html-tag-include');
module.exports = function html() {
	return src(['src/**/*.html', '!src/components/**/*.html'])
		.pipe(include())
		.pipe(htmlTagInclude())
		.pipe(dest('build'))
		.pipe(bs.stream())
}