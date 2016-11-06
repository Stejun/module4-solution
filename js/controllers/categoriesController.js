(function(){
    angular.module('data')
    
    .controller("CategoriesController",["list", function(list){
        this.list = list.data;
    }]);
})()
