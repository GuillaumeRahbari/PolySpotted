<?php 

function addRevelation() {
	if (isset($_POST['password']) && isset($_POST['message']) && strlen($_POST['message']) > 0) {
		$_POST['password'] = addslashes($_POST['password']);
		$_POST['message'] = addslashes($_POST['message']);
		if (isset($_POST['author'])) {
			$_POST['author'] = addslashes($_POST['author']);
		} else {
			$_POST['author'] = "Anonyme";
		}
		$bdd = getBdd();
		$isadded = $bdd->exec('INSERT INTO reveal_revelations(author, message, password) VALUES ("'.$_POST['author'].'", "'.$_POST['message'].'","'.$_POST['password'].'")') == 1;
		if ($isadded) {
			return json_encode(array("status" => "success", "data" => new Revelation($bdd->lastInsertId())));
		} else {
			return json_encode(array("status" => "error", "data" => "Problème lors de l'ajout à la bdd"));
		}
	} else {
		return json_encode(array("status" => "error", "data" => "Vous devez envoyer un message et un password"));
	}
}

function createTag($id) {
	$id = intval($id);
	if ( isset($_POST['tagname']) && strlen($_POST['tagname']) > 0 && $id > 0) {
		$_POST['tagname'] = addslashes($_POST['tagname']);
		$revelation = new Revelation($id);
		if (is_null($revelation->message)) {
			return json_encode(array("status" => "error", "data" => "Cette revelation n'existe pas"));
		} else {
			$bdd = getBdd();
			$bdd->exec('INSERT INTO reveal_tags(idrevelation, name) VALUES ("'.$id.'","'.$_POST['tagname'].'")');
			return json_encode(array("status" => "success", "data" => new Revelation($id)));
		}
		
	} else {
		return json_encode(array("status" => "error", "data" => "Vous devez envoyer un tag de plus d'un caractere et un id entier"));
	}
}