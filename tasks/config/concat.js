/**
 * Concatenate files.
 *
 * ---------------------------------------------------------------
 *
 * Concatenates files javascript and css from a defined array. Creates concatenated files in
 * .tmp/public/contact directory
 * [concat](https://github.com/gruntjs/grunt-contrib-concat)
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-concat
 */
module.exports = function(grunt) {

	grunt.config.set('concat', {
		options: {
		},
		readme: { //------- main.lib.js -------
			src: [
				'docs/readme/header.md',
				'docs/readme/install.md',
				'docs/readme/examples.md',
				'docs/readme/api.md',
				'docs/readme/license.md',

			],
			dest: 'README.md'
		},
	});


	grunt.loadNpmTasks('grunt-contrib-concat');
};

