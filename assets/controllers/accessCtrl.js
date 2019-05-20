app.controller('accessCtrl', ['$scope','$routeParams','$q','$cookies','$window','login', function($scope,$routeParams,$q,$cookies,$window,login){
    $scope.mail = $routeParams.mail;
    $scope.token = $routeParams.token;
    if($cookies.get('token')== $scope.token && $cookies.get('mail')==$scope.mail ){
        login.getInfo($scope.token, $scope.mail)
            .then(function(data){
                $scope.datos = data;
            })
            .catch(function(response){
                console.log(response.status);
            });
    }else{
        $window.location.href = "#!/";
    }
    $scope.singOut = function(){
        $cookies.remove('token');
        $cookies.remove('mail');
        $window.location.href = "#!/";
    }
}]);
