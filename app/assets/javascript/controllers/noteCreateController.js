angular.module('NoteWrangler').controller('NoteCreateController', 
	function($scope, Note, Category, User, $location){
	$scope.isSubmitting = false;
	$scope.note = new Note();
	$scope.categories = Category.query();
	$scope.users = User.query();

	$scope.saveNote = function(note){
		$scope.isSubmitting = true;
		note.$save().then(function(){
			$location.path('/notes');
		}).finally(function(){
			$scope.isSubmitting = false;
		});
	}
});