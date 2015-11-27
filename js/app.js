var myApp = angular.module('myApp', ['ui.router', 'firebase'])

var ref = new Firebase('https://personal-portfolio-chrisli8.firebaseio.com/');

  var data;

  ref.once("value", function(snapshot) {
    console.log(snapshot.val());
    data = snapshot.val();
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
    data = {};
  });

myApp.controller('myCtrl', function($scope, $firebaseAuth, $firebaseArray, $firebaseObject){
  $scope.projects = {"projects" :[
    {
      "title" : "Dawg Coffee",
      "title2" : "Utilizes Bootstrap",
      "about" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "imgUrl" : "img/dawg-coffee-img.png",
      "projectUrl" : "http://students.washington.edu/chrisli8/info343/dawg-coffee/"
    },

    {
      "title" : "Spotify Challenge",
      "title2" : "Utilizes Spotify API & Angular",
      "about" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "imgUrl" : "img/spotify-challenge-img.png",
      "projectUrl" : "http://students.washington.edu/chrisli8/info343/spotify-challenge"
    },

    {
      "title" : "Police Shootings",
      "title2" : "Utilizes Leaflet Library",
      "about" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "imgUrl" : "img/police-shooting-img.png",
      "projectUrl" : "http://students.washington.edu/chrisli8/info343/police-shooting"
    },

    {
      "title" : "Family Photo",
      "title2" : "Utilizes Parse Library",
      "about" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "imgUrl" : "img/family-photo-img.png",
      "projectUrl" : "http://students.washington.edu/chrisli8/info343/family-photo"
    }
  ]};
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
  $scope.number = 20
})

// About page controller: define $scope.about as a string
.controller('AboutController', function($scope){
  $scope.about = "Here's some information about this page."
})

// Content controller: define $scope.url as an image
.controller('ContentController', function($scope){
  $scope.url = "http://conference.unavsa.org/wp-content/uploads/2015/06/SEA-pic.jpg"
})

// var myApp = angular.module('myApp', ['ui.router'], ['firebase'])

// // myApp.controller('myCtrl', function($scope, $firebaseAuth, $firebaseArray, $firebaseObject){
// //   var ref = new Firebase('https://personal-portfolio-chrisli8.firebaseio.com/');

// //   ref.on("value", function(snapshot) {
// //     console.log(snapshot.val());
// //   }, function (errorObject) {
// //     console.log("The read failed: " + errorObject.code);
// //   });
// // })

// // Config route provider
// .config(function($stateProvider) {
//     $stateProvider
//   .state('home', {
//     url:'/',
//     templateUrl: 'templates/home.html',
//     controller: 'HomeController',
//   })
//   .state('content', {
//     url:'/content',
//     templateUrl: 'templates/content.html',
//     controller: 'ContentController',
//   })
//   .state('about', {
//     url:'/about',
//     templateUrl: 'templates/about.html',
//     controller: 'AboutController',
//   })
// })

// // // Landing page controller: define $scope.number as a number
// // .controller('HomeController', function($scope){
// //   $scope.number = 20
// // })

// // // About page controller: define $scope.about as a string
// // .controller('AboutController', function($scope){
// //   $scope.about = "Here's some information about this page."
// // })

// // // Content controller: define $scope.url as an image
// // .controller('ContentController', function($scope){
// //   $scope.url = "http://conference.unavsa.org/wp-content/uploads/2015/06/SEA-pic.jpg"
// // })