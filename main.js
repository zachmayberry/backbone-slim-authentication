require.config({
	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		}
	},
	paths: {
		jquery: 'lib/jquery/jquery',
		underscore: 'lib/backbone/underscore',
		backbone: 'lib/backbone/backbone',
		text: 'lib/require/text'
	}
});

require([
	'routers/router'
], function( Workspace ) {

	new Workspace();
	Backbone.history.start();

});
