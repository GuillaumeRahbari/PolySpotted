'use strict';

angular
.module('polySpottedApp')
.factory('UserFactory', function ($q, $http, $baseURL) {
	var factory = {
		getUsers: function () {
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: $baseURL + '/Users',
				headers: {'Content-Type': 'application/json'}
			}).success(function (data) { // success du php
				if (data.status === 'success') { // success de la bdd
					deferred.resolve(data.data);
				} else { // error de la bdd
					deferred.reject(data.data);
				}
			}).error(function () {
				deferred.reject('Erreur de connexion !');
			});
			return deferred.promise;
		},
		chooseUsername: function (name) {
			factory.username = name;
		}
	};
	return factory;
});
