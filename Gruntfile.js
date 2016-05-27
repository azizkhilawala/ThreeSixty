// wrapper function
module.exports = function(grunt){
  //do grunt related things
  //Project Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

responsive_images: {
  dev:{
    options: {
      engine: 'im'
    },
    files: [{
      expand:true,
      cwd: 'image-assests/original',
      src: ['**/*.{jpg,gif,png}'],
      dest: 'image-assests/responsive/'
      }]
  }
},

copy:{
  main:{
    files:[
    {
        expand:true,
        cwd: 'image-assests/responsive',
        src: ['img*-small.jpg'],
        dest: 'image-assests/small/',
        filter: 'isFile'
    },
    {
      expand:true,
        cwd: 'image-assests/responsive',
        src: ['img*-medium.jpg'],
        dest: 'image-assests/medium/',
        filter: 'isFile'
    }
    {
      expand:true,
      cwd: 'image-assests/responsive',
        src: ['img*-large.jpg'],
        dest: 'image-assests/large/',
        filter: 'isFile'
    }
    ]
  }
}
  });

//load the plugins
grunt.loadNpmTasks('grunt-responsive-images');
grunt.loadNpmTasks('grunt-contrib-copy');

//default tasks to run once grunt begins
grunt.registerTask('default',[]);

};
