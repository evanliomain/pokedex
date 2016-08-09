# pokedex
> A very simple pokedex package to get basic information on pokemon without http request.

This pokedex give you names and image of the first 720 pokemons without http request.


## Installation

`npm install simple-pokedex --save`

## How to use

```javascript
const pokedex = require('simple-pokedex');

// With a number id
const salameche = pokedex(4);

// With a string id
const reptincel = pokedex('5');

// With a padded string id
const dracofeu = pokedex('006');

// With an array of id : return an array
const pokemonsArr = pokedex([1, '7', '010', 13]);

// With several arguments : return an array
const pokemonsArg = pokedex('80', '056', 23);
```

Pokemon format :
```javascript
{
  id     : <the id ok pokemon, with 3 zero padded, ex: "004">,
  nameFr : <the french name of the pokemon, ex: "Salamèche">,
  nameEn : <the english name of the pokemon, ex: "Charmander">,
  nameDe : <the german name of the pokemon, ex: "Glumanda">,
  nameJp : <the japan name of the pokemon, ex: "Hitokage">,
  image  : <the base 64 image of the pokemon>
}
```
