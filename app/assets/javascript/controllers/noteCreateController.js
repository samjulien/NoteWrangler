angular.module('NoteWrangler').controller('NoteCreateController', 
	function($scope, Note, $location){
	$scope.isSubmitting = false;
	$scope.note = new Note();

	$scope.saveNote = function(note){
		$scope.isSubmitting = true;
		note.$save().then(function(){
			$location.path('/notes');
		}).finally(function(){
			$scope.isSubmitting = false;
		});
	}
});