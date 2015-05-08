angular
.module('polySpottedApp')
.factory('RevelationFactory', function ($q, $http, $baseURL) {
	var factory = {
		getRevelations: function () {
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: $baseURL + '/Revelations',
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
		getRevelation: function (id) {
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: $baseURL + '/Revelations/' + id,
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
		createRevelation: function (message, password, username) {
			var deferred = $q.defer();
			var object = {
				message: message,
				password: password
			};
			if (username) {
				object.author = username;
			}
			$http({
				method: 'POST',
				url: $baseURL + '/Revelations',
				data: object,
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
		addTag: function (idRevelation, tagname) {
			var deferred = $q.defer();
			$http({
				method: 'POST',
				url: $baseURL + '/Revelations/' + idRevelation + '/Tags',
				headers: {'Content-Type': 'application/json'},
				data: {
					tagname: tagname
				}
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
		voteForRevelation: function (id, bool) {
			var deferred = $q.defer();
			$http({
				method: 'PUT',
				url: $baseURL + '/Revelations/' + id + '/' + (bool ? 'incr':'decr'),
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
		deleteRevelation: function (id, password) {
			var deferred = $q.defer();
			$http({
				method: 'POST',
				url: $baseURL + '/Revelations/' + id + '/delete',
				headers: {'Content-Type': 'application/json'},
				data: {
					password: password
				}
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