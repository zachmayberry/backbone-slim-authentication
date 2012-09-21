define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/auth/login.html',
	'text!templates/auth/signup.html'
], function( $, _, Backbone, loginTemplate, signupTemplate ) {
	
	var AuthView = Backbone.View.extend({

		el: '#app',

		events: {

		},

		initialize: function() {

			this.$body = $('#app');

			if (auth.is_logged_in) {
				location.hash = '#app';
			} else {
				this.render();
			}

		},

		render: function() {

			if (this.attributes.type == 'signup')
				this.template = _.template( signupTemplate );
			else
				this.template = _.template( loginTemplate );
			

			this.$body.html( this.template ).addClass('auth');


		}

	});

	return AuthView;

});
