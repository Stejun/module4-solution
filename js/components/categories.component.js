(function(){
    "use strict";

    angular.module('data')
    
    .component("categories",{
        templateUrl: "template/categories.component.html",
        bindings:{
            categoriesList: "<"
        }
    })
})()
