<!doctype html>
<html lang="en">

<head>

	<title>App</title>

	<link rel="stylesheet/less" type="text/css" href="/assets/less/app.less" />

	<script type="text/javascript">

		var auth = function() {};
		auth.is_logged_in = <?=($is_logged_in ? 'true' : 'false')?>;
		auth.login_failure = <?=($login_failure ? 'true' : 'false')?>;

	</script>

	<script data-main="main" src="/lib/require/require.js"></script>

	<script type="text/javascript"> var less; (less = less || {}).env = 'development';</script>
	<script src="/lib/less/less.js"></script>


</head>
<body id="app">


</body>
</html>
