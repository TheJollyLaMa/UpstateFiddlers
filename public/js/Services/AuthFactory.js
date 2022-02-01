'use strict';
/*global app*/
/*global localStorage*/
// Used in AuthController.js
app.factory('AuthFactory', ['$http', '$location', function ($http, $location) {
    return {
        checkCredentials: checkCredentials,
        getName: getName,
        setId: setId,
        getId: getId,
        isUserLoggedIn: isUserLoggedIn,
        saveData: saveData,
        clearData: clearData,
        Mock_Cred_Check: Mock_Cred_Check
    }
    var loggedin = false, id, username;
    function Mock_Cred_Check(credentials) {
        if (credentials.username === 'admin' && credentials.password === 'admin') {
            credentials.token="12345";
            console.log(credentials)
            saveData(credentials);
            $location.path('/BehindTheCounter');
        }else{
        //  console.log(response.data.error);
            $location.path('/Login');
            loggedin = false;
        }
        return credentials;
    }
    function checkCredentials(credentials) {
          var username = credentials.username, password = credentials.password, auth = '/users/checkCredentials/' + username + '/' + password,
              request = {
                  url: auth,
                  method: 'POST',
                  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                  // data: 'username='+username+'&password='+password
              };
              // console.log(request);
          return $http(request).then(function (response) {
            // console.log(response.data.res.success);
                  if(response.data.res.success) {
                      saveData(response.data.res);
                      $location.path('/BehindTheCounter');
                  }else{
                  //  console.log(response.data.error);
                      $location.path('/Login');
                      loggedin = false;
                  }
                //  console.log(response.data);
                  return response.data;
          });
    }
    function getName() {
        return username;
    }
    function setId(data) {
        id = data.id;
    }
    function getId() {
        return id;
    }
    function isUserLoggedIn() {
        if (!!localStorage.getItem('login')) {
            loggedin = true;
            var data = JSON.parse(localStorage.getItem('login'));
            username = data.user;
            id = data.id;
        }//console.log(loggedin);
        return loggedin;
    }
    function saveData(data) {

        username = data.user;
        id = data.token;
        loggedin = true;
        //console.log(id);
        localStorage.setItem('login', JSON.stringify({username: username, id: id}));
        //console.log("Auth variables set in Local Storage ...");
        return username, loggedin;
    }
    function clearData() {
        localStorage.removeItem('login');
        localStorage.clear();
        console.log("Local storage cleared ...");
        loggedin = false;
        username = "";
        id = "";
        console.log("Variables cleared ...");
    }
}]);
