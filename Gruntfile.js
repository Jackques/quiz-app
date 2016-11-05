module.exports = function (grunt) {
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    require('load-grunt-tasks')(grunt); // dit doet het blijkbaar niet?

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'js/<%= pkg.name %>.js',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
		sass: {
		  dist: {
			options: {
			  style: 'expanded',
			  loadPath: ['bower_components/foundation/scss']
			},
			files: {
			  'dist/screen.min.css': 'sass/screen.scss',
			}
		  }
		}
    });


    // Default task(s).
    grunt.registerTask('default', ['uglify', 'sass']);

};