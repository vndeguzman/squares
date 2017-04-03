angular
    .module('squares.login')
        .directive('login', login)
    ;

login.$inject = ['$compile'];
function login($compile) {
    let directive = {
        restrict: 'E',
        link: link
    };
    return directive;

    function link(scope, element) {
        element.html(require('./login.html'));
        $compile(element.contents())(scope);
    }
}