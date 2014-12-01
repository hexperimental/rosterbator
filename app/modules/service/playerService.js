(function(){
    angular
    .module("HxApp")
    .service('PlayerService',['$http',PlayerService]);

    function PlayerService($http){

        this.selectedPlayers=[];

        this.playersData=[];

        //Get all dudes available.
        this.getAll = function(){
            return $http.get('dataSource.php')
        }

        //Returns the player Data and takes care of caching.
        this.getPlayer=function(playerID){
            if( !this.playersData[playerID] ) {
                console.log('No data, load for'+playerID)
                this.playersData[playerID]=this.getPlayerData(playerID);
            }
            return this.playersData[playerID];
        }
        //Gets player data from the internetz.
        this.getPlayerData = function(playerID){
            return $http.get('dataSource.php?pid='+playerID);
        }

        //Manages the roster. Double tag will untag
        this.tagPlayer = function(playerID){
            var index=this.selectedPlayers.indexOf(playerID);
            if(index<0){
                this.selectedPlayers.unshift(playerID);
                this.getPlayer(playerID);
            }else{
                this.selectedPlayers.splice(index,1);
            }
        }
        this.untagPlayer=function(playerID){
            var index=this.selectedPlayers.indexOf(playerID);
            if(index>=0){
                this.selectedPlayers.splice(index,1);
            }
        }

    };
})();
