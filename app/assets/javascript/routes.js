angular.module('NoteWrangler').config(function($routeProvider){
	$routeProvider
	.when('/', {
		redirectTo: '/notes'
	})
	.when('/notes', {
		templateUrl: 'assets/templates/notes/index.html',
		controller: 'NoteIndexController'
	})
	.when('/notes/new', {
		templateUrl: 'assets/templates/notes/new.html',
		controller: 'NoteCreateController'
	})
	.when('/notes/:id/edit', {
		templateUrl: 'assets/templates/notes/edit.html',
		controller: 'NoteEditController'
	})
	.when('/notes/:id', {
		templateUrl: 'assets/templates/notes/show.html',
		controller: 'NoteShowController'
	})
	.when('/users', {
		templateUrl: 'assets/templates/users/index.html',
		controller: 'UsersIndexController'
	})
	.when('/users/:id', {
		templateUrl: 'assets/templates/users/show.html',
		controller: 'UsersShowController'
	})
})