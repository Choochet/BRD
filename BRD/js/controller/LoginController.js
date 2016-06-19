function LoginCtrl($scope, $state, AuthService) {

    $scope.signin = function (username, password) {
        var input = {
            username: username,
            password: password
        }
        AuthService.Login(input)
            .then(function () {
                $state.go('dashboards.dashboard_1');
            },
            function (data, status, headers, config, statusText) {

            })
        
    }
}
  

angular
    .module('inspinia')
    .controller('LoginCtrl', LoginCtrl)