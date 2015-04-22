<?php 

function delete ($id) {
	$id = intval($id);
	if (isset($_POST['password']) && $id > 0) {
		$revelation = new Revelation($id);
		if ( is_null($revelation->message) ) {
			return json_encode(array("status" => "error", "data" => "Cette revelation n'existe pas"));
		} else {
			if ($revelation->destroy(($_POST['password']))) {
				return json_encode(array("status" => "success", "data" => ""));
			} else {
				return json_encode(array("status" => "error", "data" => "Mauvais mot de passe"));
			}
		}

		
	} else {
		return json_encode(array("status" => "error", "data" => "Vous devez entrer un mot de passe caractere et un id entier"));
	}
	
}