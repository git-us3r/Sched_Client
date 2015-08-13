var app = angular.module("schedClient");
app.controller("LandingCtrl", ['$scope', '$state', 'LoginService', ctrl]);

function ctrl($scope) {
 
    window.setTimeout(function() {
            
        $scope.$apply(function() {

            $scope.testTiles = [];

            for (var i = 0; i < 10; i++) {
                $scope.testTiles.push(i);
            }            

            $scope.update(); //update masonry layout
        })
    }, 1000)
};