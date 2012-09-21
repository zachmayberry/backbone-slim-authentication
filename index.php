<?php

require 'api/Slim.php';

$app = new Slim();
$app->config(array(
	'templates.path' => './'
));

$app->add(new Slim_Middleware_SessionCookie(array(
	'expires' => '20 Minutes',
	'path' => '/',
	'domain' => null,
	'secure' => false,
	'httponly' => false,
	'name' => 'app',
	'secret' => 'md5secretstuff',
	'cipher' => MCRYPT_RIJNDAEL_256,
	'cipher_mode' => MCRYPT_MODE_CBC
)));


$app->get('/', function () use ($app) {

	if ( isset($_SESSION['is_logged_in']) ) {
		$data['is_logged_in'] = true;
	} else {
		$data['is_logged_in'] = false;
	}

	if ( isset($_SESSION['login_failure']) ) {
		$data['login_failure'] = true;
	} else {
		$data['login_failure'] = false;
	}


	$app->render('main.php', $data);

});

$app->post('/auth/process', function () use ($app) {

	$mongo = new Mongo();
	$db = $mongo->auth;
	$collection = $db->users;

	if ( isset($_POST['name']) ) {
		$name = $_POST['name'];
	} else {
		$name = '';
	}

	$data = array(
		'name' => $name,
		'email' => $_POST['email'],
		'password' => md5($_POST['password']),
	);

	$cursor = $collection->findOne( array('email' => $data['email'] ));

	if ($cursor == NULL) {

		$collection->insert($data);

		$_SESSION['is_logged_in'] = true;
		$_SESSION['email'] = $data['email'];
		$app->redirect('/#app');

	} else {
		if ($data['password'] == $cursor['password']) {

			$_SESSION['is_logged_in'] = true;
			$_SESSION['email'] = $data['email'];
			$_SESSION['login_failure'] = false;
			$app->redirect('/#app');

		} else {

			$_SESSION['login_failure'] = true;
			$app->redirect('/#login');

		}
	}
});

$app->get('/logout', function () use ($app) {

	session_unset();
	$app->redirect('/#login');

});

$app->run();
