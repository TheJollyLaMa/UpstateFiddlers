'use strict';
/*global app*/
app.controller('BehindTheCounterController', ['$scope', 'FiddleMarketFactory', function($scope, FiddleMarketFactory){
  var init = function() {
      $scope.title = {fiddlers_ledger:"Fiddler's Ledger", pickers_dash:"Fiddle Pickers Dashboard"};
      
      //addharvest function
      $scope.addHarvest = async function(harvest) {
        // get a datetime stamp for the current time
        harvest.time = new Date();
        await FiddleMarketFactory.addHarvest(harvest).then((res)=>{
          console.log(res);
          $scope.harvest = {};
        });
      }
      //logSale function
      $scope.logSale = async function(sale) {
        // get a datetime stamp for the current time
        sale.time = new Date();
        await FiddleMarketFactory.logSale(sale).then((res)=>{
          console.log(res);
          $scope.sale = {};
        });
      }
      $scope.getPickers = async function() {
         
        // mock dataset with 12 names and email addresses
        $scope.pickers = [
          {'name': 'John Doe', 'email': 'JohnD@gmail.com', 'location': 'location1'},
          {'name': 'Jane Doe', 'email': 'JaneD@gmail.com', 'location': 'location2'},
          {'name': 'Joe Doe', 'email': 'JoeD@gmail.com', 'location': 'location2'},
          {'name': 'John Smith', 'email': 'JS@gmail.com', 'location': 'location1'},
          {'name': 'Jane Smith', 'email': 'jaS@gmail.com', 'location': 'location2'},
          {'name': 'Joe Smith', 'email': 'joS@gmail.com ', 'location': 'location2'}
        ]; 
        // await FiddleMarketFactory.getPickers().then((res)=>{
        //   console.log(res);
        //   $scope.pickers = res.data;
        // });
      }
  }
  init();

}]);
