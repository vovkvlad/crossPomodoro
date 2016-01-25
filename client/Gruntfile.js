module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/scripts/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        watch: {
            js: {
                files: ['src/scripts/**/*'],
                tasks: ['clean:js', 'concat:all', 'ngtemplates']
            },
            sass: {
                files: ['src/resources/**/*'],
                tasks: ['clean:resources', 'sass:debug']
            },
            vendor: {
                files: ['src/vendor/**/*'],
                tasks: ['clean:vendor', 'copy:all']
            },
            html: {
                files: ['src/index.html'],
                tasks: ['clean:html', 'copy:mainHtml']
            }
        },
        clean: {
            all: ['dist/**/*'],
            js: ['dist/scripts'],
            resources: ['dist/resources'],
            vendor: ['dist/vendor'],//might not use it
            html: ['dist/index.html']
        },
        copy: {
            all: {
                files: [
                    {expand: true, cwd: 'src', src: 'index.html', dest: 'dist'},
                    {expand: true, cwd: 'src', src: ['vendor/**/*', '!vendor/bootstrap-sass-3.3.5', '!vendor/bootstrap-sass-3.3.5/**/*'], dest: 'dist'}
                ]
            },
            mainHtml: {
                files: [
                    {expand: true, cwd: 'src', src: 'index.html', dest: 'dist'}
                ]
            }
        },
        concat: {
            options: {
                process: function (src, filepath) {
                    return '//####' + filepath + '\n' + src +'\n';
                }
            },
            all: {
                files: [
                    {
                        src:['src/scripts/**/*.module.js', 'src/scripts/**/*.module.config.js', 'src/scripts/**/*', '!src/scripts/**/*.html'],
                        dest: 'dist/scripts/app.js'
                    }
                ]
            }
        },
        sass: {
            debug: {
                options: {
                    style: 'expanded',
                    //update: true,
                    lineNumbers: true
                },
                files: [
                    {
                        src: 'src/resources/sass/all.scss',
                        dest: 'dist/resources/css/app.css'
                    }
                ]
            }
        },
        ngtemplates: {
            cpm: {
                src: 'src/scripts/**/*.html',
                dest: 'dist/scripts/app.js',
                options: {
                    append: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-angular-templates');

    grunt.registerTask('debug', ['clean:all', 'concat:all', 'ngtemplates', 'copy:all', 'sass:debug', 'watch']);
};