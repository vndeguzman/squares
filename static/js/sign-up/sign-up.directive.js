angular
    .module('squares.signUp')
        .directive('signUp', signUp)

function signUp($compile) {
    var directive = {
        restrict: 'E',
        link: link
    };
    return directive;

    function link(scope, element) {
        console.log('link');
        element.html(require('./sign-up.html'));
        $compile(element.contents())(scope);
    }
}