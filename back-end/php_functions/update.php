<?php 

function incr ($id) {
	$id = intval($id);
	if ($id > 0) {
		$resultat = new Revelation($id);
		if ( is_null($resultat->message) ) {
			return json_encode(array("status" => "error", "data" => "Cette revelation n'existe pas"));
		} else {
			$resultat->increment();
			return json_encode(array("status" => "success", "data" => $resultat));
		}
	} else {
		return json_encode(array("status" => "error", "data" => "veuillez entrer un id entier"));
	}
}

function decr ($id) {
	$id = intval($id);
	if ($id > 0) {
		$resultat = new Revelation($id);
		if ( is_null($resultat->message) ) {
			return json_encode(array("status" => "error", "data" => "Cette revelation n'existe pas"));
		} else {
			$resultat->decrement();
			return json_encode(array("status" => "success", "data" => $resultat));
		}
	} else {
		return json_encode(array("status" => "error", "data" => "veuillez entrer un id entier"));
	}
}