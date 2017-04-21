var fs = require('fs');


module.exports = function(grunt) {

	grunt.config.set('jsdoc2md', {
		readme: {
			option: {
			},
			src: [
				'lib/index.js',
			],
			dest: 'docs/readme/api.md',
		},
	});

	grunt.loadNpmTasks('grunt-jsdoc-to-markdown')
};
