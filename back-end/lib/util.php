<?php

function getBdd () {
	try { $bdd = new PDO('mysql:host=localhost;dbname=polyreveal','root', ''); }
	catch (Exception $e) { die($e); }
	return $bdd;
}
