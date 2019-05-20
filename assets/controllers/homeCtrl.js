app.controller('homeCtrl', ['$scope','$window','$cookies','login', function($scope,$window,$cookies,login){
    $scope.singIn = function(){
        $scope.token = '';
        $scope.email = $scope.mail;
        login.putLogin(($scope.email).replace("@","%40"), $scope.password)
            .then(
                function (data) {
                    if(data.status == 400 ){
                        $window.location.href = '#!/';
                        return false;
                    }else {
                        $scope.token = (data.sessionTokenBck).replace($scope.mail,"");
                        $cookies.put ("token", $scope.token);
                        $cookies.put ("mail", $scope.mail);
                        $window.location.href = "#!/access/"+$scope.mail+"/"+ $scope.token;

                    }
                }
            );

    }




}]);

