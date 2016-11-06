(function(){
    angular.module('data')
    
    .constant("allCategories","https://davids-restaurant.herokuapp.com/categories.json")
    .constant("menuItems","https://davids-restaurant.herokuapp.com/menu_items.json?category=")
    
    .service("MenuDataService",["allCategories", "menuItems", "$http", function(allCategories, menuItems, $http){
        this.getAllCategories = function(){
            return $http.get(allCategories);
        };

        this.getItemsForCategory = function(categoryShortName){
            return $http.get(menuItems + categoryShortName);
        };
    }]);
})()
