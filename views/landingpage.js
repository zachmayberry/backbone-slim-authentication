define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/landingpage.html',
], function( $, _, Backbone, landingPageTemplate ) {
	
	var LandingPageView = Backbone.View.extend({

		el: '#app',

		template: _.template( landingPageTemplate ),

		events: {

		},

		initialize: function() {

			this.$body = $('#app');
			
			this.render();
		},

		render: function() {

			this.$body.html( this.template() ).addClass('landingpage');


		}

	});

	return LandingPageView;

});
