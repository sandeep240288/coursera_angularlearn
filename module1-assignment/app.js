(function() {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunch_items = "";
        $scope.msg = "";
        $scope.check_lunch = function() {
          $scope.msg =get_message($scope.lunch_items)[0] ;
         $scope.color =get_message($scope.lunch_items)[1] ;
        }
    }
    function get_message(string) {
        var message = "";
        var color ="default";
        var lunch_item = string.split(',');
        var count = lunch_item.length;
      var data =[];
        if (!string) {
            data[0] = "Please enter data first";
            data[1]="danger";
        } else {
            if (count <= 3) {
                data[0] =  "Enjoy!";
                data[1]="success";
            } else {
              data[0] =  "Too Much!";
              data[1]="success";
            }
        }
    return data;
    }
})();
