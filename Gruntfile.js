module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-serve');
	// Project configuration. 
	grunt.initConfig({
    	serve: {
        	options: {
            	port: 9000
        	}
    	}
	});
};