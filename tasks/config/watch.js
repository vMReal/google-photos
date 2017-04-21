/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 *
 */
module.exports = function(grunt) {

	grunt.config.set('watch', {
		ts: {
			files: ['src/**/*.ts'],
			tasks: [
				'clean:lib',
				'ts:dev',
			],
			options: {
				livereload: 35721,
			},
		},

		testFull: {
			files: ['lib/**/*'],
			tasks: ['karma:full'],
			options: {
				livereload: 35733,
			},
		},
		testSilent: {
			files: ['lib/**/*', 'test/**/*.ts'],
			tasks: ['karma:silent'],
			options: {
				livereload: 35734,
			},
		},
		readme: {
			files: ['lib/**/*'],
			tasks: ['jsdoc2md:readme', 'concat:readme'],
			options: {
				livereload: 35734,
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
};
