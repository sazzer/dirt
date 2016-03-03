module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    // Keep the plugins in alphabetical order
    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015-node5']
            }, 
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/main',
                    src: ['**/*.js'],
                    dest: 'target/dirt'
                }]
            }
        },
        clean: ['target'],
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/layouts',
                    src: ['**/*'],
                    dest: 'target/dirt'
                }]
            }
        },
        eslint: {
            options: {
                configFile: 'eslintrc'
            }, 
            main: {
                files: [{
                    expand: true,
                    src: ['src/main/**/*.js']
                }]
            }
        },
        jscpd: {
            main: {
                path: 'src/main'
            }
        },
        run: {
            main: {
                cmd: 'node_modules/.bin/electron',
                args: [
                    'target/dirt/index.js'
                ],
                options: {
                    wait: false
                }
            }
        }
    });

    grunt.registerTask('build', ['eslint:main', 'jscpd:main', 'babel:main', 'copy:main']);
    grunt.registerTask('start', ['build', 'run:main']);
};

