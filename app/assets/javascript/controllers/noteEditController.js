angular.module('NoteWrangler').controller('NoteEditController', 
	function(Note, $scope, $routeParams, $location){
	$scope.note = Note.get({id: $routeParams.id});
	$scope.isSubmitting = false;

	$scope.saveNote = function(note){
		$scope.isSubmitting = true;
		note.$update().finally(function(){
			$scope.isSubmitting = false;
			$location.path("/notes/" + note.id);
		});
	}
});