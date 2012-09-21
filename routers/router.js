define([
	'jquery',
	'backbone',
	'views/app',
	'views/landingpage',
	'views/auth'
], function( $, Backbone, AppView, LandingPageView, AuthView ) {

	var Workspace = Backbone.Router.extend({

		initialize: function() {
			console.log('workspace');
		},

		routes: {
			"": "signup",
			"app": "app",
			"login": "login",
			"signup": "signup"
		},

		landingpage: function() {
			new LandingPageView();	
		},

		app: function() {
			new AppView();	
		},

		login: function() {
			new AuthView({
				attributes: { type : 'login' }
			});
		},

		signup: function() {
			new AuthView({
				attributes: { type : 'signup' }
			});
		}


	});

	return Workspace;
});
