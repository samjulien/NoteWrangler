angular.module('NoteWrangler').controller('NoteEditController', 
	function(Note, Category, User, $scope, $routeParams, $location){
	$scope.note = Note.get({id: $routeParams.id});
	$scope.categories = Category.query();
	$scope.users = User.query();

	$scope.isSubmitting = false;

	$scope.saveNote = function(note){
		$scope.isSubmitting = true;
		note.$update().then(function(){
			$location.path("/notes/" + note.id);
		}).finally(function(){
			$scope.isSubmitting = false;
		});
	}
});