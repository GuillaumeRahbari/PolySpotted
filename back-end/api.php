<?php
// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}
header('Content-Type: application/json');


require_once 'lib/limonade.php';
require_once 'class/User.class.php';

require_once 'php_functions/create.php';
require_once 'php_functions/read.php';
require_once 'php_functions/update.php';
require_once 'php_functions/delete.php';

/* CREATE */
dispatch_post('/Revelations', 'addRevelation');
dispatch_post('/Revelations/:id/Tags', 'createTag');

/* READ */
dispatch_get('/Revelations', 'getAllRevelations');
dispatch_get('/Revelations/:id', 'getRevelation');
dispatch_get('/Tags', 'getAllTags');
dispatch_get('/Tags/:name/Revelations', 'getTag');
dispatch_get('/Users', 'getUsers');

/* UPDATE */
dispatch_put('/Revelations/:id/incr', 'incr');
dispatch_put('/Revelations/:id/decr', 'decr');

/* DELETE */
dispatch_post('Revelations/:id/delete', 'delete');

run();