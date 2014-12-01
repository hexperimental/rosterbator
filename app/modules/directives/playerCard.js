(function(){
    'use strict';

    var playerCard = function(PlayerService){
        return {
            restrict: 'E',
            templateUrl: 'app/modules/directives/playerCard.html',
            scope: {
                player: '='
            },
            controller:function($scope){
                //this loads the player's data.
                PlayerService.getPlayer($scope.player).then(function(response){
                    $scope.playerData = response.data;
                    //todo: hide preloader here!!
                    //todo: also, add a preloader
                });
                //When untagging
                $scope.untagPlayer=function(){
                    PlayerService.untagPlayer($scope.player)
                }
            }
        };
    };

    angular
    .module('HxApp')
    .directive('playerCard', ['PlayerService', playerCard]);

})();
