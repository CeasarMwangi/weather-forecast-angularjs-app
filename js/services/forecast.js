app.factory('forecast', ['$http', function($http) { 
  return $http.get('http://keydigitalsolutionslimited.com/watermeter/weather-forecast-angularjs-app/forecast.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
