define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/app.html',
], function( $, _, Backbone, appTemplate ) {
	
	var AppView = Backbone.View.extend({

		el: '#app',

		template: _.template( appTemplate ),

		events: {

		},

		initialize: function() {

			this.$body = $('#app');

			if (auth.is_logged_in) {
				this.render();
			} else {
				location.hash = '#login';
			}
		},

		render: function() {

			this.$body.html( this.template() );


		}

	});

	return AppView;

});
