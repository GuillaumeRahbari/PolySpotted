<?php

include('class/Revelation.class.php');

class User {

	public $name = null;
	public $revelations = null;

	private $bdd = null;

	public function __construct($username) {
		$this->bdd = getBdd();

		$class = $this->bdd->query('SELECT * FROM reveal_revelations WHERE author="'.$username.'";');
		$this->revelations = array();
		while ($donnees = $class->fetch()) {
			$this->name = $username;
			$this->revelations[] = new Revelation($donnees['id']);
		}
	}

}