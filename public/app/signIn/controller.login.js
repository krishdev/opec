navModule.controller('loginCtrl', ['$scope', '$timeout', '$location', 'loginService', function ($scope, $timeout, $location, loginService) {
	var lCtrl = this;

	lCtrl.loginModel = {
		username: "",
		password: ""
	};
	lCtrl.registerModal = {
		username: "",
		email: "",
		password: "",
		cPassword: ""
	};
	lCtrl.errorMessage = {
		login: {
			message: "",
		},
		register: {
			message: "",
		}
	};

	lCtrl.submit_login = function (isValid) {
		var loginData;
		if (isValid) {
			loginData = lCtrl.loginModel;
			loginService.postData('/api/login', loginData).then(function (response) {
				console.log(response);
			}, function errorCallBackFunction(response) {
				console.log(response);
			});
		} else {
			lCtrl.errorMessage.login = "Please fill all the items and retry."
			angular.element($("#login-form")).addClass("error");
		}
	};
	lCtrl.submit_register = function (isValid) {
		var registerData;
		if (isValid) {
			registerData = {
				email: lCtrl.registerModal.email,
				password: lCtrl.registerModal.password
			}
			loginService.postData('/api/register', registerData).then(function (response) {
				console.log(response);
			}, function errorCallBackFunction(response) {
				console.log(response);
			});
		} else {
			lCtrl.errorMessage.register = "Please fill all the items and retry."
		}
	};
}]);

navModule.directive('rqInput', function () {
	return {
		restrict: "A",
		link: function (scope, iElement, attrs) {
			//iElement.
		}
	};
});
navModule.factory('loginService', function ($http) {
	return {
		postData: function (url, paramObj) {
			return $http({
				method: 'post',
				url: url,
				params: paramObj
			});
		}
	};
});
