angular
    .module('squares.play.grid')
        .directive('grid', grid)

function grid ($compile) {
    let directive = {
        link: link,
        restrict: 'E'
    };
    return directive;

    function link(scope, element, attrs) {
        console.log('grid')
        element.html(require('./grid.html'))
        $compile(element.contents())(scope);
    }
}