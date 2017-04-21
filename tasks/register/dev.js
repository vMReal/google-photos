module.exports = function (grunt) {
	grunt.registerTask('dev:ts', 'Run ts and test', function () {
		grunt.task.run('watch:ts');
	});

	grunt.registerTask('dev:test', 'Run ts and test', function () {
		grunt.task.run('watch:test');
	});
};
