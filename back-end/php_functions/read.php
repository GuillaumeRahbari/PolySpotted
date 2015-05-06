<?php 

function getAllRevelations () {
	$bdd = getBdd();
	$revelations = $bdd->query('SELECT * FROM reveal_revelations');
	$resultat = array();

	while ($donnees = $revelations->fetch()) {
		$resultat [] = new Revelation($donnees['id']);
	}
	return json_encode(array("status" => "success", "data" => $resultat));
}

function getRevelation ($id) {
	$id = intval($id);
	if ($id > 0) {
		$resultat = new Revelation($id);
		if (is_null($resultat->message)) {
			return json_encode(array("status" => "error", "data" => "Cette revelation n'existe pas"));
		} else {
			return json_encode(array("status" => "success", "data" => $resultat));
		}
	} else {
		return json_encode(array("status" => "error", "data" => "veuillez entrer un id entier"));
	}
	
}

function getAllTags() {
	$bdd = getBdd();
	$tags = $bdd->query("SELECT DISTINCT name FROM reveal_tags");

	$resultat = array();

	while ($donnees = $tags->fetch()) {
		$resultat [] = ($donnees['name']);
	}
	return json_encode(array("status" => "success", "data" => $resultat));
}

function getTag($name) {
	$name = addslashes($name);
	$bdd = getBdd();
	$tags = $bdd->query('SELECT DISTINCT idrevelation FROM reveal_tags WHERE name="'.$name.'" ');

	if ($tags->rowCount() > 0) {
		$resultat = array();

		while ($donnees = $tags->fetch()) {
			$resultat [] = new Revelation($donnees['idrevelation']);
		}
		return json_encode(array("status" => "success", "data" => $resultat));

	} else {
		return json_encode(array("status" => "error", "data" => "Ce tag n'existe pas"));
	}
}

function getUsers () {
	$bdd = getBdd();
	$tags = $bdd->query("SELECT DISTINCT author FROM reveal_revelations");

	$resultat = array();

	while ($donnees = $tags->fetch()) {
		$resultat [] = new User($donnees['author']);
	}
	return json_encode(array("status" => "success", "data" => $resultat));
}