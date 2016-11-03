module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //    require('load-grunt-tasks')(grunt); // dit doet het blijkbaar niet?

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
        compass: { // Task
            dist: {
                options: {
                    config: 'config.rb', // css_dir = 'dev/css'
                    cssDir: 'dist/css'
                }
            }
            //            dev: { // Another target
            //                options: {
            //                    sassDir: 'sass',
            //                    cssDir: 'stylesheets'
            //                }
            //            }
        }
    });


    // Default task(s).
    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('compass', ['compass']);

};