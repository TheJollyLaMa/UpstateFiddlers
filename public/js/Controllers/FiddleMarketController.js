"use strict";
app.controller("FiddleMarketController", ["$scope", "FiddleMarketFactory", function($scope, FiddleMarketFactory) {
  var init = function () {
      $scope.title = 'Fiddle Market HomePage';
      $scope.about = {msg: "Here's were we put any kind of info about fiddle ferns and whatever you want the club to know about you!"};
      $scope.fetchFiddleMarketData = async () => {
        await FiddleMarketFactory.FetchFiddleMarketData().then((res)=>{
          console.log(res);
          $scope.fiddleInventory = res.data;
          $scope.lbs_expected = 0;
          $scope.lbs_stored = 0;
        })
      };
    
      $scope.fetchFiddleMarketData();
  }

  init();
}]);
