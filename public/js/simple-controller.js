function SimpleCtrl($scope, $http, $log) {
  $scope.pre = [{}];
  $scope.remove = function(item) {
    var index = $scope.pre.indexOf(item)
    $scope.pre.splice(index, 1);
  };
  $scope.load = function() {
    $http.get('/ajax')
      .success(function(data) {
        $scope.data = data;
        $log.log(JSON.stringify(data));
        $log.log(data);
      });
  };
}
