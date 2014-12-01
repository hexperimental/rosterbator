(function(){
    'use strict';

    var playerRow = function(PlayerService){
        return {
            restrict: 'E',
            templateUrl: 'app/modules/directives/player-row.html',
            scope: {
                player: '=',
            },
            controller:function($scope){
                $scope.openPlayerCard = function(playerID){
                    // Tag player to show card with info.
                    PlayerService.tagPlayer(playerID);
                }
            }
        };
    };

    angular
    .module('HxApp')
    .directive('playerRow', ['PlayerService',playerRow]);

})();
