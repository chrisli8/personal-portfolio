var myApp = angular.module('myApp', ['ui.router', 'firebase'])


myApp.controller('myCtrl', function($scope, $firebaseAuth, $firebaseArray, $firebaseObject){
  var ref = new Firebase('https://personal-portfolio-chrisli8.firebaseio.com/');

  // download the data into a local object
  $scope.projects = $firebaseObject(ref);
  
})

// Config route provider
.config(function($stateProvider) {
    $stateProvider
  .state('home', {
    url:'/',
    templateUrl: 'templates/home.html',
    controller: 'HomeController',
  })
  .state('content', {
    url:'/content',
    templateUrl: 'templates/content.html',
    controller: 'ContentController',
  })
  .state('about', {
    url:'/about',
    templateUrl: 'templates/about.html',
    controller: 'AboutController',
  })
})

// Landing page controller: define $scope.number as a number
.controller('HomeController', function($scope){
  // $scope.number = 20
})

// About page controller: define $scope.about as a string
.controller('AboutController', function($scope){
  // $scope.about = "Here's some information about this page."
})

// Content controller: define $scope.url as an image
.controller('ContentController', function($scope){
  // $scope.url = "http://conference.unavsa.org/wp-content/uploads/2015/06/SEA-pic.jpg"
})
