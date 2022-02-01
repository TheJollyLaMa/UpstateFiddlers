'use strict';
/*global app*/
/*global localStorage*/
app.factory('FiddleMarketFactory', ['$http', function ($http) {
    return {
      FetchFiddleMarketData: FetchFiddleMarketData,
      addHarvest: addHarvest,
      logSale: logSale,
      getPickers: getPickers,
    }
    /* Returns inventory data from backend */
    function FetchFiddleMarketData() {
      return $http.get('/fiddle_data').then((res)=>{return res});
    }
    /* Saves New Harvest to Database */
    function addHarvest() {
      return $http.get('/addHarvest').then((res)=>{return res});
    }
    /* Log Sales to Database */ 
    function logSale() {
      return $http.get('/logSale').then((res)=>{return res});
    }
    /* Log Sales to Database */ 
    function getPickers() {  
      return pickers;//$http.get('/getPickers').then((res)=>{return res});
    }
}]);
