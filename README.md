# LAN party’s
Ce dépôt contient les différents sites des LAN’s organisées par la KiwiAsso.

## LAN 8.0

![Capture d’écran du site de la LAN 8.0](https://s13.postimg.org/ohss53r53/lan80_mockedup.png)

Le site web de la LAN 8.0 est pensé pour être très simple, il est constitué d’une page d’introduction avec la date et le nom de l’évènement. Cette page d’introduction prend toute la taille de l’écran, et possède un background vidéo.

Lorsque l’utilisateur clique sur la flèche ou scroll vers le bas de la page, un formulaire d’inscription prenant au minimum toute la taille de l’écran apparaît. Vous pouvez remarquer que html et body sont en overflow: hidden, et que par conséquent l’animation entre l’introduction et le formulaire est le seul moyen de changer de page.

En revanche, le formulaire possède est encapsulé dans une div de taille fixe (celle de l’écran, 100vh), et donc si le formulaire est trop grand et dépasse de la taille de l’écran, alors il devient possible de scroller sur cette page uniquement. Si l’utilisateur scroll vers le haut en étant en haut du formulaire, alors il reviendra à la page d’introduction.

Ce site utilise [Node.js](https://nodejs.org/), [Express](http://expressjs.com/), et les [API’s google](https://developers.google.com/sheets/). En effet, les inscriptions sont automatiquement enregistrées dans un tableur hebergé par google drive. De plus, j’utilise [Material Design Lite](https://getmdl.io/) pour le design du formulaire.

Pour en savoir plus, rendez-vous ici : [LAN 8.0](https://github.com/johynpapin/lanpartys/tree/master/lan8).

## LAN 7.0

![Capture d’écran du site de la LAN 7.0](https://s11.postimg.org/skdvm3k4j/lan70_mockedup.png)

Le site web de la LAN 7.0 est plus complexe que celui de la LAN 8.0. Réalisé à l’aide de [Meteor](https://www.meteor.com/), il est relié à la plate-forme [toornament](https://www.toornament.com/) afin de publier en temps-réel les résultats des matchs.

Il gère l’inscription des joueurs de manière plus poussée : création d’un espace personnel, puis inscription dans une équipe, où il est possible de communiquer avec les autres membres.

La technologie Meteor rend le site très rapide, car le routage à lieu au niveau du client et les données sont actualisées en temps-réel.
