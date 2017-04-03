angular
    .module('squares.play')
        .directive('game', game)
    ;

game.$inject = ['$compile'];
function game($compile) {
    let directive = {
        restrict: 'E',
        link: link
    };
    return directive;

    function link(scope, element) {
        element.html(require('./game.html'));
        $compile(element.contents())(scope);
    }
}