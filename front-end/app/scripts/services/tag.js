angular
.module('polySpottedApp')
.factory('TagFactory', function ($q, $http, $baseURL) {
	var factory = {
		getTags: function () {
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: $baseURL + '/Tags',
				headers: {'Content-Type': 'application/json'}
			}).success(function (data, status) { // success du php
				if (data.status == "success") { // success de la bdd
					deferred.resolve(data.data);
				} else { // error de la bdd
					deferred.reject(data.data);
				}
			}).error(function (data, status) {
				deferred.reject('Erreur de connexion !');
			});
			return deferred.promise;
		},
		getRevelationsByTag: function (tagname) {
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: $baseURL + '/Tags/' + tagname + "/Revelations",
				//url:'forguigui',
				headers: {'Content-Type': 'application/json'}
			}).success(function (data, status) { // success du php
				if (data.status == "success") { // success de la bdd
					deferred.resolve(data.data);
				} else { // error de la bdd
					deferred.reject(data.data);
				}
			}).error(function (data, status) {
				deferred.reject('Erreur de connexion !');
			});
			return deferred.promise;
		}
	};
	return factory;
});