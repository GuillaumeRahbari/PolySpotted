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
    getUser: function (username) {
      var deferred = $q.defer();
      factory.getUsers().then(
        function (data) {
          for (var i in data) {
            if (data[i].name === username) {
              deferred.resolve(data[i]);
              break;
            }
          }
        }, function (msg) {
          deferred.reject(msg);
        }
      );
      return deferred.promise;
    }
	};
	return factory;
});
