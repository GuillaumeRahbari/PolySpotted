How To USE ?<br/>
<br/>
il faut avoir WAMP qui tourne sur sa machine.<br/>
<br/>
--> créez les tables em important create_table.sql<br/>
--> modifier le fichier ./lib/util.php avec vos log (login, password)<br/>
--> le routing se trouve dans le fichier api.php, les callbacks dans les fichiers create.php, read.php, update.php, delete.php du dossier <strong>php_functions</strong>.<br/>
<br/>
le format de retour :<br/>
<br/>
{<br/>
	"status": "success" || "error",<br/>
	"data" : "message derreur" || "" || Revelation Object || [Revelation Object]<br/>
}<br/>