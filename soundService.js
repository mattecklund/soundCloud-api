var app = angular.module('sounder');

app.service('soundService', function($http, $q){
	// console.log('In Her Majest\'s Sound Service');

	var api_key = 'bda4ada8694db06efcac9cf97b872b3e';

	this.getUser = function(username){
		return $http({
			method: 'GET',
			url: 'http://api.soundcloud.com/users/' + username + '/tracks.json?client_id=' + api_key
		});
	};
});