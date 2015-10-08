module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        meta: {
            banner: '/*\n' +
                ' *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
                ' *  <%= pkg.description %>\n' +
                ' *  <%= pkg.homepage %>\n' +
                ' *\n' +
                ' *  Copyright (c) <%= grunt.template.today("yyyy") %> Ewerton Assis <hello@dearaujoassis.com>\n' +
                ' *  MIT License\n' +
                ' */\n'
        },

        concat: {
            options: {
                banner: '<%= meta.banner %>'
            },
            dist: {
                src: ['src/vanilla-slider.js'],
                dest: 'dist/vanilla-slider.js'
            }
        },

        lintspaces: {
            javascript: {
                src: [
                    'src/*'
                ],
                options: {
                    newline: true,
                    trailingspaces: true,
                    indentation: 'spaces',
                    spaces: 4
                }
            }
        },

        jshint: {
            files: ['src/vanilla-slider.js'],
            options: {
                jshintrc: ".jshintrc"
            }
        },

        uglify: {
            options: {
                banner: '<%= meta.banner %>'
            },
            my_target: {
                src: ['dist/vanilla-slider.js'],
                dest: 'dist/vanilla-slider.min.js'
            }
        },

        watch: {
            files: ['**/*'],
            tasks: ['jshint', 'concat', 'uglify'],
        },

        connect: {
            server: {
                options: {
                    port: 3000,
                    base: 'site',
                    keepalive: true
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-lintspaces');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['lintspaces', 'jshint', 'concat', 'uglify']);
    grunt.registerTask('release', ['default']);

};
