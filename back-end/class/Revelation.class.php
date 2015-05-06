<?php

class Revelation {

	public $id = null;
	public $tags = null;
	public $message = null;
	public $like = null;
	public $author = null;

	private $password = null;

	private $bdd = null;

	public function __construct($id) {
		$this->bdd = getBdd();

		$class = $this->bdd->query('SELECT * FROM reveal_revelations WHERE id='.$id.';');
		while ($donnees = $class->fetch()) {
			$this->id = $id;
			$this->message = $donnees['message'];
			$this->like = ($donnees['like']);
			$this->password = ($donnees['password']);
			$this->author = ($donnees['author']);
		}

		$this->tags = array();
		$tagsQuery = $this->bdd->query('SELECT DISTINCT name FROM reveal_tags WHERE idrevelation='.$id.';');
		while ($donnees = $tagsQuery->fetch()) {
			$this->tags[] = $donnees['name'];
		}
	}

	public function destroy ($password) {
		if ($password == $this->password) {
			$this->bdd->exec('DELETE FROM reveal_tags WHERE idrevelation='.$this->id.';');
			$this->bdd->exec('DELETE FROM reveal_revelations WHERE id='.$this->id.';');
			return true;
		} else {
			return false;
		}
	}

	public function increment () {
		$this->like++;
		$this->bdd->exec('UPDATE reveal_revelations SET `like`='.($this->like).' WHERE id='.$this->id.' ;');
	}

	public function decrement () {
		$this->like--;
		$this->bdd->exec('UPDATE reveal_revelations SET `like`='.($this->like).' WHERE id='.$this->id.' ;');
	}

}