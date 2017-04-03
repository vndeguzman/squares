angular
    .module('squares.signUp')
    .factory('SignUpFactory', SignUpFactory)

SignUpFactory.$inject = ['$http']
function SignUpFactory($http) {
    let factory = {};
    factory.postSignUpDetails = postSignUpDetails;
    return factory;

    function postSignUpDetails (newUser) {
        return $http.post('/api/sign-up/', newUser)
    }

}