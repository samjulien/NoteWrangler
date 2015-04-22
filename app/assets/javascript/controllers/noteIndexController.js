angular.module('NoteWrangler').controller('NoteIndexController', function(Note, $scope){
	$scope.notes = Note.query();

	console.log($scope.notes);
});