var opecMain = angular.module('opecMain', ['ui.router', 'ngSanitize', 'navbar']);
opecMain.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('index', {
			url: "/",
			templateUrl: "app/index/tmpl.index.html",
			controller: "indexCtrl as iCtrl"
		})
		/*.state('login', {
			url: "/login",
			templateUrl: "app/signIn/tmpl.login.html",
			controller: "loginCtrl as lCtrl"
		})*/
	;
});
