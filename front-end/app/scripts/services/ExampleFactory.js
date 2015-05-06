angular
.module('polySpottedApp')
.factory('ExampleFactory', function ($q, $http) {
	var factory = {
		data: false,
		getTags: function () {
			var deferred = $q.defer();
			if (factory.data === false) {
				$http({
					method: 'GET',
					url: 'http://localhost/~JohnSevenight/PolySpotted/back-end/api.php/tags',
					//url:'forguigui',
					headers: {'Content-Type': 'application/json'}
				}).success(function (data, status) { // success du php
					if (data.status == "success") { // success de la bdd
						factory.data = data.data;
						deferred.resolve(data.data);
					} else { // error de la bdd
						deferred.reject(data.data);
					}
				}).error(function (data, status) {
					console.log(data);
					deferred.reject('Erreur de connexion !');
				});
			} else {
				deferred.resolve(factory.data);
			}
			return deferred.promise;
		}
	};
	return factory;
});