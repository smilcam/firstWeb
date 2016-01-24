angular.module('myApp',['ui.router'])
   .config(function($stateProvider, $urlRouterProvider){
       $stateProvider
    .state('nba',{
        url:'/nba',
        templateUrl: './js/nba/nbaTmple.html'
    }) 
     .state('home',{
        url:'/',
        
  })
  .state('nfl',{
        url:'/nfl',
        templateUrl:'./js/nfl/nflTmpl.html' 
  })
   .state('nhl',{
        url:'/nhl',
        templateUrl:'./js/nhl/nhlTmpl.html'
        
  })
   .state('mlb',{
        url:'/mlb',
        templateUrl:'./js/mlb/mlbTmpl.html'
        
  })
     .state('newSport',{
        url:'/newsport',
        templateUrl:'./js/newSport/newSportTmpl.html'
        
  })
  
  
  
  
  
$urlRouterProvider.otherwise('/');

});