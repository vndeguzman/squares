require('../stylesheets/styles.scss');
require('./sign-up/sign-up.module');
require('./login/login.module');
require('./play/play.module');
require('./top-scores/top-scores.module');

angular
    .module('squares', [
        'ngMaterial',
        'ngVidBg',
        'squares.signUp',
        'squares.login',
        'squares.play',
        'squares.topScores'
    ])
    .controller('MainController', MainController)
    .directive('videoCurrentTime', videoCurrentTime)
    .config(config);

function config($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('grey')
        .accentPalette('teal')
}

function MainController($scope, $rootScope){
    let vm = this;
    vm.forward = forward
    vm.indexSelectedTab = 0
    $rootScope.videoSettings = {
        currentTime: 0,
        playbackRate: 1.0,
        loop: true
    };
    $scope.$watch(function() { return vm.indexSelectedTab}, function(newIndexSelectedTab) {
        if (newIndexSelectedTab === 2) {
            $rootScope.videoSettings = {
                currentTime: 67,
                playbackRate: 5.0,
                loop: false
            };
        }
    });
    function forward () {
        this.indexSelectedTab++;
    }
    function back () {
        this.indexSelectedTab--;
    }
}

function videoCurrentTime($rootScope){
    var directive = {
        scope: {
            videoCurrentTime: "=videoCurrentTime"
        },
        restrict: 'A',
        link: link
    };
    return directive

    function link(scope, element){
        scope.$watch(function () { return $rootScope.videoSettings }, function (newVideoSettings) {
            element[0].currentTime = newVideoSettings.currentTime;
            element[0].playbackRate = newVideoSettings.playbackRate;
            element[0].loop = newVideoSettings.loop;
        });
    }

}

