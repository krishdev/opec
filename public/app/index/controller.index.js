opecMain.controller('indexCtrl', ['$scope', '$location', '$timeout', 'commonService', function ($scope, $location, $timeout, commonService) {
	$scope.universities = {
		country: 'AD',
		university: 'University of Andorra',
		url: "http://www.uda.ad/"
	};
	commonService.postData('/api/insertDataSet', $scope.universities).then(function (response) {
		console.log(response.data);
	});
}]);
navModule.factory('commonService', function ($http) {
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
