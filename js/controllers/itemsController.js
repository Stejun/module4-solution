(function(){
    angular.module('data')
    
    .controller("ItemsController",["items", function(items){
        this.items = items.data['menu_items'];
    }]);
})()
