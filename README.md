# BDDI Node.js stream - twitter API

Projet scolaire dans le cadre du Workshop NodeJS

## Setup

```bash
npm install
```

creer un fichier .env en suivant l'exemle : .env.example, puis ajouter les cles
```bash
TWITTER_API_STREAM_URL=https://stream.twitter.com/1.1
TWITTER_API_CONSUMER_KEY= AJOUTER KEY
TWITTER_API_CONSUMER_SECRET= AJOUTER KEY
TWITTER_API_TOKEN= AJOUTER KEY
TWITTER_API_TOKEN_SECRET= AJOUTER KEY
PORT=8080
```

Puis lancer :
```bash
node index.js
```
Aller sur l'url suivante :
```bash
http://localhost:8080/
```

## Description du projet

J'ai choisi de filtrer mes recherches sur le theme du sport et plus particulierement du football.

Dans un premier cas, on effectue un premier filtre sur le mot cle : "football"

Par la suite, un deuxième filtre est mis en place, on affiche uniquement les tweets des utilisateurs dont la nationalite est presente dans une liste.

Pour finir, les diffentes pays sont afficher avec le nombre de tweet correspondant.

### Problèmes rencontrés

Mon principal probleme etait le filtrage des donnees avec une Regex pour être le plus precis possible dans les tweets recuperer.
