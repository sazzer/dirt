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
            },
            ui: {
                files: [{
                    expand: true,
                    cwd: 'src/ui',
                    src: [
                        '**/*.js',
                        '**/*.jsx'
                    ],
                    dest: 'target/dirt/ui',
                    ext: '.js'
                }],
                options: {
                    plugins: [
                        'transform-react-jsx'
                    ]
                }
            }
        },
        clean: ['target'],
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/layouts',
                    src: ['**/*'],
                    dest: 'target/dirt/ui'
                }, {
                    expand: true,
                    cwd: '.',
                    src: ['package.json'],
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
            },
            ui: {
                files: [{
                    expand: true,
                    src: [
                        'src/ui/**/*.js',
                        'src/ui/**/*.jsx'
                    ]
                }]
            }
        },
        jscpd: {
            main: {
                path: 'src/main'
            },
            ui: {
                path: 'src/ui'
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
            },
            package_install: {
                cmd: 'npm',
                args: [
                    'install',
                    '--production'
                ],
                options: {
                    cwd: 'target/dirt',
                    wait: true
                }
            },
            package: {
                cmd: './node_modules/.bin/electron-packager',
                args: [
                    'target/dirt/',
                    'Dirt',
                    '--all',
                    '--out',
                    'target/build/',
                    '--overwrite'
                ],
                options: {
                    wait: true
                }
            }
        },
        sass: {
            options: {
                style: 'expanded'
            },
            ui: {
                files: {
                    'target/dirt/ui/css/dirt.css': 'src/scss/dirt.scss'
                }
            }
        }
    });

    grunt.registerTask('build', ['eslint', 'jscpd', 'babel', 'sass', 'copy']);
    grunt.registerTask('start', ['build', 'run:main']);
    grunt.registerTask('package', ['build', 'run:package_install', 'run:package']);
};
