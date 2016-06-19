function AuthService($http, $q, ngAuthSettings) {
    var AuthServiceFactory = {};
    var _dashboard = {};
    var serviceBase = ngAuthSettings.apiServiceBaseUri;
    var _login = function (input) {
        var deferred = $q.defer();
        $http.post(serviceBase + 'api/Account/Login',input)
        .success(function (data, status, headers, config, statusText) {
        
            deferred.resolve(data, status, headers, config, statusTex);
        })
        .error(function (err, status, headers, config, statusText) {
            deferred.reject(err, status, headers, config, statusText);
        });
        return deferred.promise;
    };
   

    AuthServiceFactory.Login = _login;
   
    return AuthServiceFactory;

}
angular
.module('inspinia')
.factory('AuthService', AuthService)