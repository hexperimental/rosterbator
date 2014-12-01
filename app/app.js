(function(){
    angular.module("HxApp",[
        'ngRoute',
        'ui.router',
    ])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl: 'app/modules/home/home.html',
            controllerAs: 'home',
            controller: 'HomeController',
            resolve:{// make sure we have the player before anything else
                players:[
                    'PlayerService',
                    function(PlayerService){
                        return PlayerService.getAll()
                        .then(function(response){
                            return response.data;
                        });
                    }]
            }
        })
        .otherwise({redirectTo:'/home'});
    }])
    .controller('BodyController',BodyController)
    .controller('HomeController',HomeController);

    function BodyController(){
        //todo: Do something with this:
        /*this.menu = [{
          'title': 'Home',
          'link': '/'
          },
          {
          'title': 'About',
          'link': '/about'
          },
          ];
          */
    }

    HomeController.$inject=['PlayerService','players'];
    function HomeController(PlayerService,players){
        this.players = players;
        this.pos = ''
        this.selectedPlayers = PlayerService.selectedPlayers;
    }

})();
