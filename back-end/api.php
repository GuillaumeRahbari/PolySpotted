<?php

header('Content-Type: application/json');

require_once 'lib/limonade.php';
require_once 'class/Revelation.class.php';

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

/* UPDATE */
dispatch_put('/Revelations/:id/incr', 'incr');
dispatch_put('/Revelations/:id/decr', 'decr');

/* DELETE */
dispatch_post('Revelations/:id/delete', 'delete');

run();