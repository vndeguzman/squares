angular
    .module('squares.topScores')
        .directive('topScores', topScores);

topScores.$inject = ['$compile'];
function topScores ($compile) {
    var directive = {
        restrict: 'E',
        link: link
    };
    return directive;

    function link(scope, element) {
        console.log('link');
        element.html(require('./top-scores.html'));
        $compile(element.contents())(scope);
    }
}