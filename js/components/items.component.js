(function(){
    "use strict";

    angular.module('data')
    
    .component("items",{
        templateUrl: "template/items.component.html",
        bindings:{
            itemsList: "<"
        }
    })
})()
