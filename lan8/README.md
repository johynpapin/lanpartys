# LAN 8.0
Le site web de la LAN 8.0 se veut très simple, il est constitué d’une page d’introduction avec la date et le nom de l’évènement. Cette page d’introduction prend toute la taille de l’écran, et possède un background vidéo.

Lorsque l’utilisateur clique sur la flèche ou scroll vers le bas de la page, un formulaire d’inscription prenant au minimum toute la taille de l’écran apparaît. Vous pouvez remarquer que html et body sont en overflow: hidden, et que par conséquent l’animation entre l’introduction et le formulaire est le seul moyen de changer de page.

En revanche, le formulaire possède est encapsulé dans une div de taille fixe (celle de l’écran, 100vh), et donc si le formulaire est trop grand et dépasse de la taille de l’écran, alors il devient possible de scroller sur cette page uniquement. Si l’utilisateur scroll vers le haut en étant en haut du formulaire, alors il reviendra à la page d’introduction.

## Installation
Pour créer votre propre copie de ce site, il vous faudra cloner ce dépôt.
