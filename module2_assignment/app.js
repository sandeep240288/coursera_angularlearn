(function(){
'use strict';
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject =['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
var tobuy =this;
tobuy.items =ShoppingListCheckOffService.getItems();
tobuy.trfrItem =function(itemIndex){
 ShoppingListCheckOffService.addItem(itemIndex);
 ShoppingListCheckOffService.removeItems(itemIndex);

  };
}
AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
var bought = this;
bought.items = ShoppingListCheckOffService.getboughtItems();
}
function ShoppingListCheckOffService(){
var service =this;
// var boughtItems = [];
var tobuyitems=[{name:'cookies',quantity:10},{name:'cupcake',quantity:5},{name:'jellybean',quantity:10},{name:'nogut',quantity:5},{name:'banana',quantity:24}];
var boughtItems=[];
service.getItems=function(){
  return tobuyitems;
};
service.removeItems = function(itemIndex){
  return tobuyitems.splice(itemIndex,1);
};
service.addItem=function(itemIndex){
 var itemBought =service.getItems()[itemIndex];
 service.getboughtItems().push(itemBought);
};
service.getboughtItems = function(){
  return boughtItems;
};
}
})();
