angular.module('NoteWrangler').controller('NoteShowController', 
	function(Note, $scope, $routeParams){
	$scope.note = Note.get({id: $routeParams.id});
});