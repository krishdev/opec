opecMain.controller('insertCtrl', ['$scope', '$location', '$timeout', 'postContact', function ($scope, $location, $timeout, postContact) {
	postContact.getData('app/insertData/universities.json')
		.then(function (response) {
			$scope.universities = {
				'universities': response.data
			};
		});
}]);

opecMain.factory('postContact', function ($http) {
	return {
		postData: function (fileName, data) {
			return $http.post(fileName, data);
		},
		getData: function (fileName) {
			return $http.get(fileName);
		}
	}
});
