<!doctype html>
<html lang="en" ng-app="HxApp">
    <head>
        <meta charset="UTF-8">
        <title>HxPlayers</title>
        <link rel="stylesheet" href="app/css/style.css"/>
    </head>
<body ng-controller="BodyController as body">
<div class="header">
    <img class="menuButton" src="app/img/HexIcon57.png" with="16" height="16"/>
    <div class="logos">
        <div class="powered">Powered by:</div>
        <a href="http://hexperimental.com" target="_blank">
            <img class="hexlogo" src="app/img/hex.png" /></a>
        <div class="sponsored">Sponsored by:</div>
        <a href="http://www.onestopinteractive.com" target="_blank">
            <img class="osilogo" src="app/img/osi.png" /></a>
    </div>
</div>

<h1>Rosterbator</h1>
<div id="view" ng-view></div>
        <script src="vendor/angular.js"></script>
        <script src="vendor/angular-route.min.js"></script>
        <script src="vendor/angular-ui-router.js"></script>
        <script src="app/app.js"></script>
        <script src="app/modules/service/playerService.js"></script>
        <script src="app/modules/playerPicker/playerPicker.js"></script>
        <script src="app/modules/directives/playerRow.js"></script>
        <script src="app/modules/directives/playerCard.js"></script>
</body>
</html>
