'use strict';

/*global app*/
app.controller('AuthController', ['$scope', 'AuthFactory', function ($scope, AuthFactory) {
    $scope.credentials = {username: '',password: ''};
    $scope.login = function (credentials) {
      // AuthFactory.checkCredentials(credentials)
      AuthFactory.Mock_Cred_Check(credentials)
      // .then(function (res){
      //   //console.log(res);
      //   if(!res.status) {
      //       $scope.error = res;
      //       // console.log(res);
      //   }
      // });

    };
}]);
