module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig( {
    pkg: grunt.file.readJSON('package.json'),


    photobox: {
      options: {
        urls: [ 'http://localhost/grunt-photobox-tutorial/' ],
        screenSizes: [ '400x800', '600x800', '1200x800' ]
      }
    }
  } );

  // Load photobox plugin
  grunt.loadNpmTasks( 'grunt-photobox' );

  // Default task(s).
  grunt.registerTask( 'default', [ 'photobox' ] );
};
