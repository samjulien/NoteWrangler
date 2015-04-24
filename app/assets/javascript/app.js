'use strict'

angular.module('NoteWrangler', ['ngRoute', 'ngResource', 'ngGravatar'])
	.config(function(GravatarProvider){
		GravatarProvider.setSize(50);
	});