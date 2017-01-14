var app = angular.module('app', ['tableSort']);

app
  .controller('MainController', function MainController($scope, $http) {
    $scope.competitions = [];

    $http({
      method: 'GET',
      url: 'competitions.json'
    }).then(function successCallback(response) {
      $scope.competitions = response.data; // response data
    }, function errorCallback(error) {
      console.error(error);
    });
  })
  .filter('parseCurrency', function () {
    return function (input) {
      return input.replace('$', '').replace(/,/g, '');
    };
  });
