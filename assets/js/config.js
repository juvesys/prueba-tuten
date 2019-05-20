app.config( function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'assets/views/home.html',
			controller: 'homeCtrl'
		})
		.when('/access/:mail/:token',{
			templateUrl: 'assets/views/access.html',
			controller: 'accessCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});


});