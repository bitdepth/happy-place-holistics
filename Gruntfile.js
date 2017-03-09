module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        assemble: {
            options: {
                assets: 'assets',
                flatten: true,
                partials: ['src/templates/includes/*.hbs'],
                layoutdir: 'src/templates/layouts',
                layout: 'default.hbs'
            },
            site: {
                files: {'dist/': ['src/templates/*.hbs']}
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true, cwd: 'src/', src: ['assets/**'], dest: 'dist/'
                    }
                ]
            }
        },
        watch: {
            files: ['src/**'],
            tasks: ['default'],
            options: {
                spawn: false,
            },
        },
    });

    // Load the Assemble plugin.
    grunt.loadNpmTasks('grunt-assemble');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // The default task to run with the `grunt` command.
    grunt.registerTask('build', ['assemble', 'copy']);
    grunt.registerTask('default', ['build', 'watch']);
};