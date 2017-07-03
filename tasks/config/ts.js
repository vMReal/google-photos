

module.exports = function (grunt) {

	grunt.config.set('ts', {
		options: {
			declaration: true,
			fast: 'never',
			module: "commonjs",
			target: "es2015",
			comments: true,
		},
		dev : {
			options: {
				sourceMap: true,
				mapRoot: 'lib',
			},
			src: ['src/**/*.ts'],
			outDir: 'lib/',
		},

		build : {
			options: {
				sourceMap: false,
			},
			src: ['src/**/*.ts'],
			outDir: 'lib/',
		}
	});

	grunt.loadNpmTasks("grunt-ts");
};
