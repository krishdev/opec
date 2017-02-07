var opecMain = angular.module('opecMain', ['ui.router', 'ui.bootstrap', 'ngSanitize', 'navbar']);
opecMain.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('index', {
			url: "/",
			templateUrl: "app/index/tmpl.index.html",
			controller: "indexCtrl as iCtrl"
		})
});
