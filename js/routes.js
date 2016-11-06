(function(){
    "use strict";

    angular.module('MenuApp')
    
    .config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
        
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
        .state('home',{
            url:'/',
            templateUrl:"template/home.html"
        })
        .state('categories',{
            url:'/categories',
            templateUrl:'template/categories.html',
            controller:'CategoriesController as categoriesCtrl',
            resolve:{
                list:['MenuDataService',function(MenuDataService){
                    return MenuDataService.getAllCategories();
                }]
            }
        })
        .state('items',{
            url:'/categories/items/{shortName}',
            templateUrl:'template/items.html',
            controller:'ItemsController as itemsCtrl',
            resolve:{
                items:['MenuDataService','$stateParams',function(MenuDataService,$stateParams){
                    return MenuDataService.getItemsForCategory($stateParams.shortName);
                }]
            }
        });
    }]);
})()