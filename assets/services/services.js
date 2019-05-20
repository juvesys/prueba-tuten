var app = angular.module('pruebaApp.services',[]);
app.factory('login', ['$http','$q', function ($http,$q) {
    return {
        putLogin: function (user, password) {
            return $http({
                method: 'PUT',
                url: 'https://dev.tuten.cl/TutenREST/rest/user/' + user,
                headers: {
                    "App": "APP_BCK",
                    "Password": password
                }
            })
                .then(
                    function success(respuesta) {
                        return respuesta.data;
                    },
                    function error(response) {
                        return response;

                    }
                )
        },
        getInfo: function (token,mail) {
            var defered = $q.defer();
            $http({
                method: 'GET',
                url: "https://dev.tuten.cl/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true",
                headers: {
                    "adminemail": mail,
                    "token": mail+token,
                    "app": "APP_BCK",
                }

            })
            .then(function success(response) {
                defered.resolve(response.data);
             })
            .catch(function(response){
                    defered.reject(response);
                });
            return defered.promise;
        }
    };
}
]);
